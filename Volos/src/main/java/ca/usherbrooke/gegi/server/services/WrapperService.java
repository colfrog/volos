package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.*;
import ca.usherbrooke.gegi.server.mappers.WrapperMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Service pour effectuer les différentes méthodes de l'application
 * @author Iliass Bourabaa
 * @version 1.0
 */
@Path("")
public class WrapperService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    WrapperMapper wrapperMapper;
    @Inject
    AnnonceService annonceService;
    @Inject
    LivreService livreService;
    @Inject
    LoyerService loyerService;
    @Inject
    AuteurService auteurService;
    @Inject
    FavorisService favorisService;
    @Inject
    UtilisateurService utilisateurService;

    /**
     * @return la liste de toutes les annonces de la catégorie Livre avec les données
     * des services AnnonceService, LivreService et AuteurService
     */
    @GET
    @Path("showLivres")
    @Produces("application/json")
    public List<Livre> showPublishLivres() {
        List<Annonce> annonces = annonceService.annoncePublishLivres();
        List<Livre> livres = new ArrayList<Livre>();
            Livre livre;

        for(Annonce annonce : annonces) {
            livre = livreService.getLivre(annonce.getId());
            livre.setEnfant(annonce);
            livre.setAuteurs(wrapperMapper.findAuteur(livre.getId()));

            livres.add(livre);
        }

        return livres;
    }

    /**
     * @return la liste de toutes les annonces de la catégorie Loyer avec les données
     * des services AnnonceService et LoyerService
     */
    @GET
    @Path("showLoyers")
    @Produces("application/json")
    public List<Loyer> showPublishLoyers() {
        List<Annonce> annonces = annonceService.annoncePublishLoyers();
        List<Loyer> loyers = new ArrayList<Loyer>();
        Loyer loyer;

        for(Annonce annonce : annonces) {
            loyer = loyerService.getLoyer(annonce.getId());
            loyer.setEnfant(annonce);

            loyers.add(loyer);
        }

        return loyers;
    }

    /**
     * @return la liste de toutes les annonces de la catégorie Autre avec les données
     * du service AnnonceService
     */
    @GET
    @Path("showAutres")
    @Produces("application/json")
    public List<Annonce> showPublishAutres() {
        List<Annonce> annonces = annonceService.annoncePublishAutres();

        return annonces;
    }

    /**
     * @return la liste de toutes les annonces favoris de l'utilisateur
     * présentement connecté
     */
    @GET
    @Path("showFavoris")
    @Produces("application/json")
    public List<Annonce> getFavoris() {
        //Vérfie que l'utilisateur est déjà ajouter à la table Utilisateur
        String cip = verifierUtilisateur();

        return favorisService.getFavoris(cip);
    }

    /**
     * @return la liste de toutes les annonces publié par l'utilisateur
     * présentement connecté
     */
    @GET
    @Path("showUtilisateurAnnonce")
    @Produces("application/json")
    public List<Annonce> getUtilisateurAnnonce() {
        List<Annonce> annonces = annonceService.annoncesByCip(utilisateurService.
                                    getCurrentLoggedUtilisateur().getCip());
        List<Annonce> annoncesUtilisateur = new ArrayList<Annonce>();
        Loyer loyer;
        Livre livre;

        for(Annonce annonce : annonces) {
            if(annonce.getCategorie().equals("LOYER")) {
                loyer = loyerService.getLoyer(annonce.getId());
                loyer.setEnfant(annonce);

                annoncesUtilisateur.add(loyer);
            } else if(annonce.getCategorie().equals("LIVRE")) {
                livre = livreService.getLivre(annonce.getId());
                livre.setEnfant(annonce);
                livre.setAuteurs(wrapperMapper.findAuteur(livre.getId()));

                annoncesUtilisateur.add(livre);
            } else {
                annoncesUtilisateur.add(annonce);
            }
        }

        return annoncesUtilisateur;
    }

    /**
     * Permet d'ajouter les données de l'annonce de la catégorie Livre aux
     * tables Annonce, Livre et Auteur pour l'utilisateur connecté à l'application
     */
    @GET
    @Path("addLivre")
    public void addLivre(@QueryParam("description") String description,
                         @QueryParam("prix") float prix,
                         @QueryParam("dateAffichage") Date dateAffichage,
                         @QueryParam("titre") String titre, @QueryParam("resume") String resume,
                         @QueryParam("maisonEdition") String maisonEdition,
                         @QueryParam("datePublication") Date datePublication,
                         @QueryParam("nom") String nom, @QueryParam("prenom") String prenom) {
        if(description != null && dateAffichage != null && titre != null && resume != null
                && maisonEdition != null && datePublication != null && nom != null && prenom != null) {
            //Vérfie que l'utilisateur est déjà ajouter à la table Utilisateur
            String cip = verifierUtilisateur();

            int id = annonceService.findLastIdAnnonce()+1;
            Annonce annonce = new Annonce(id, cip, description, prix, 0, dateAffichage, "LIVRE");
            Livre livre = new Livre(id, titre, resume, maisonEdition, datePublication);
            Auteur auteur = new Auteur(nom, prenom);

            annonceService.insertAnnonce(annonce);
            livreService.insertLivre(livre);
            if(!auteurService.existAuteur(auteur)) {
                auteurService.insertAuteur(nom, prenom);
            }
            wrapperMapper.addLiaisonAuteurLivre(livre, auteur);
        }
    }

    /**
     * Permet d'ajouter les données de l'annonce de la catégorie Loyer aux
     * tables Annonce et Loyer pour l'utilisateur connecté à l'application
     */
    @GET
    @Path("addLoyer")
    public void addLoyer(@QueryParam("description") String description,
                         @QueryParam("prix") float prix,
                         @QueryParam("dateAffichage") Date dateAffichage,
                         @QueryParam("titre") String titre, @QueryParam("nbChambre") int nbChambre,
                         @QueryParam("dateDebutLocation") Date dateDebutLocation,
                         @QueryParam("dateFinLocation") Date dateFinLocation) {
        if(description != null && dateAffichage != null && titre != null && dateDebutLocation != null
                && dateFinLocation != null) {
            //Vérfie que l'utilisateur est déjà ajouter à la table Utilisateur
            String cip = verifierUtilisateur();

            int id = annonceService.findLastIdAnnonce() + 1;
            Annonce annonce = new Annonce(id, cip, description, prix, 0, dateAffichage, "LOYER");
            Loyer loyer = new Loyer(id, titre, nbChambre, dateDebutLocation, dateFinLocation);

            annonceService.insertAnnonce(annonce);
            loyerService.insertLoyer(loyer);
        }
    }

    /**
     * Permet d'ajouter les données de l'annonce de la catégorie Autre à la
     * table Annonce pour l'utilisateur connecté à l'application
     */
    @GET
    @Path("addAutre")
    public void addAutre(@QueryParam("description") String description,
                         @QueryParam("prix") float prix,
                         @QueryParam("dateAffichage") Date dateAffichage) {
        if(description != null && dateAffichage != null) {
            //Vérfie que l'utilisateur est déjà ajouter à la table Utilisateur
            String cip = verifierUtilisateur();

            int id = annonceService.findLastIdAnnonce() + 1;
            Annonce annonce = new Annonce(id, cip, description, prix, 0, dateAffichage, "AUTRE");

            annonceService.insertAnnonce(annonce);
        }
    }

    /**
     * Permet d'ajouter une annonce par son id passé en paramètre
     * à la liste des favoris de l'utilisateur connecté à l'application
     */
    @GET
    @Path("addFavori")
    public void addFavori(@QueryParam("id") Integer id) {
        //Vérfie que l'utilisateur est déjà ajouter à la table Utilisateur
        String cip = verifierUtilisateur();

        favorisService.addFavori(cip, id);
    }

    /**
     * Permet de changer l'état de l'annonce passé en paramètre à fermé
     */
    @GET
    @Path("cancel")
    public void cancelAnnonce(@QueryParam("id") int id) {
        annonceService.cancelAnnonce(id);
    }

    /**
     * Permet de changer l'état de l'annonce passé en paramètre à vendue
     */
    @GET
    @Path("sell")
    public void sellAnnoncee(@QueryParam("id") int id) {
        annonceService.removeAnnonce(id);
    }

    /**
     * Vérifie que l'utilisateur connecté est présent dans la table Utilisateur. S'il
     * n'est pas présent, il est ajouté à la table
     * @return le cip de l'utilisateur connecté
     */
    @GET
    @Path("verifierUtilisateur")
    public String verifierUtilisateur() {
        Utilisateur utilisateur = utilisateurService.getCurrentLoggedUtilisateur();

        if(utilisateurService.selectUtilisateurByCip(utilisateur.getCip()) == null) {
            utilisateurService.insertUtilisateur(utilisateur);
        }

        return utilisateur.getCip();
    }
}
