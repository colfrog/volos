package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.Annonce;
import ca.usherbrooke.gegi.server.data.Auteur;
import ca.usherbrooke.gegi.server.data.Livre;
import ca.usherbrooke.gegi.server.data.Loyer;
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

    @GET
    @Path("showAutres")
    @Produces("application/json")
    public List<Annonce> showPublishAutres() {
        List<Annonce> annonces = annonceService.annoncePublishAutres();

        return annonces;
    }

    @GET
    @Path("showFavoris")
    @Produces("application/json")
    public List<Annonce> getFavoris(@QueryParam("cip") String cip) {
        return favorisService.getFavoris(cip);
    }

    @GET
    @Path("addLivre")
    public void addLivre(@QueryParam("cip") String cip, @QueryParam("description") String description,
                           @QueryParam("prix") float prix,
                           @QueryParam("dateAffichage") Date dateAffichage,
                           @QueryParam("titre") String titre, @QueryParam("resume") String resume,
                           @QueryParam("maisonEdition") String maisonEdition,
                           @QueryParam("datePublication") Date datePublication,
                           @QueryParam("nom") String nom, @QueryParam("prenom") String prenom) {
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

    @GET
    @Path("addLoyer")
    public void addLoyer(@QueryParam("cip") String cip, @QueryParam("description") String description,
                           @QueryParam("prix") float prix,
                           @QueryParam("dateAffichage") Date dateAffichage,
                           @QueryParam("titre") String titre, @QueryParam("nbChambre") int nbChambre,
                           @QueryParam("dateDebutLocation") Date dateDebutLocation,
                           @QueryParam("dateFinLocation") Date dateFinLocation) {
        int id = annonceService.findLastIdAnnonce()+1;
        Annonce annonce = new Annonce(id, cip, description, prix, 0, dateAffichage, "LOYER");
        Loyer loyer = new Loyer(id, titre, nbChambre, dateDebutLocation, dateFinLocation);

        annonceService.insertAnnonce(annonce);
        loyerService.insertLoyer(loyer);
    }

    @GET
    @Path("addAutre")
    public void addAutre(@QueryParam("cip") String cip, @QueryParam("description") String description,
                           @QueryParam("prix") float prix,
                           @QueryParam("dateAffichage") Date dateAffichage) {
        int id = annonceService.findLastIdAnnonce()+1;
        Annonce annonce = new Annonce(id, cip, description, prix, 0 , dateAffichage, "AUTRE");

        annonceService.insertAnnonce(annonce);
    }

    @GET
    @Path("addFavori")
    public void addFavorite(@QueryParam("cip") String cip, @QueryParam("id") Integer id) {
        favorisService.addFavori(cip, id);
    }

    @GET
    @Path("cancel")
    public void cancelAnnonce(@QueryParam("id") int id) {
        annonceService.cancelAnnonce(id);
    }

    @GET
    @Path("remove")
    public void removeAnnoncee(@QueryParam("id") int id) {
        annonceService.removeAnnonce(id);
    }
}
