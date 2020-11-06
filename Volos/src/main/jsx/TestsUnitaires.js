//CLASSE S'OCCUPANT D'EXÉCUTER TOUT LES TESTS DE MICRO-SERVICES
class TestsMicroServices extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.buttonPress = this.buttonPress.bind(this);
    }

    //AJOUTER UNE NOUVELLE LIGNE AVEC LE ID DE VOTRE BOUTTON
    buttonPress(){
        //Tests Annonce
        document.getElementById('reactTestAnnonceButton').click();
        //Tests Utilisateur
        document.getElementById('reactTestUtilisateurButton').click();
        //Tests Auteur
        document.getElementById('reactTestAuteurButton').click();
    }

    render() {
        return (
            <button onClick={this.buttonPress}>Test all</button>
        )
    }
}
var domContainer = document.querySelector('#testMicroServiceButton');
ReactDOM.render(<TestsMicroServices/>, domContainer);
//FIN CLASSE EXÉCUTANT TOUT LES TESTS DE MICRO-SERVICES


///****** MICRO-SERVICE X ******////

///****** FIN MICRO-SERVICE X ******////



///****** MICRO-SERVICE AUTEUR ******////

//Classe de données pour le micro-service Auteur
class Auteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: this.props.nom,
            prenom: this.props.prenom,
            titreTest: this.props.titreTest,    //Titre du test effectué
            ok: this.props.ok   //Boolean indiquant si le test à été réussi avec succès
        };
    }

    render() {
        if(this.state.ok != null){  //Est-ce que le test à été fait correctement
            if(this.state.ok){ //Test réussi
                return (
                    <div className='testReturnWrapper greenBckg'>
                        Test: {this.state.titreTest} | {this.state.prenom} {this.state.nom}
                    </div>
                );
            }
            else{
                return ( //Test échoué
                    <div className='testReturnWrapper redBckg'>
                        Test: {this.state.titreTest} | {this.state.prenom} {this.state.nom}
                    </div>
                );
            }
        }
        else{
            return ( //Test non fonctionnel ou impossibilité de déterminer l'issue
                <div className='testReturnWrapper'>
                    Test: {this.state.titreTest} | {this.state.prenom} {this.state.nom}
                </div>
            );
        }
    }
}

//Classe des tests du micro-service
class TestAuteur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auteurs: [],
            increment: this.props.increment
        };

        this.state.increment = 0;

        //Éxectuer tout les tests du micro-service
        this.executerTests();

        // This binding is necessary to make `this` work in the callback
        this.buttonPress = this.buttonPress.bind(this);
    }

    //Éxecute tout les tests
    executerTests(){
        //this.state.auteurs.push(<Auteur key={this.state.increment} prenom={"Paul"} nom={"du Réau"} titreTest={"TEST auteur"} ok={true}/>);
        this.auteur();
        this.insert_auteur("Paul", "Génial");
        this.existAuteur();
    }

    //TEST Auteur
    auteur(){
        fetch("/Volos/api/auteur")
            .then(data => data.json())
            .then(auteurs => {
                auteurs.forEach(auteur => {
                    this.state.auteurs.push(<Auteur key={this.state.increment} nom={auteur.nom} prenom={auteur.prenom}
                                                              titreTest={'Auteur'} ok={null} />)
                    this.state.increment++;
                });
            });
    }

    //TEST Insert_auteur
    insert_auteur(prenom, nom){
        fetch("/Volos/api/insert_auteur?nom="+nom+"&prenom="+prenom)

        this.state.auteurs.push(<Auteur key={this.state.increment} nom={nom} prenom={prenom}
                                        titreTest={'Insert_auteur'} ok={null} />)
        this.state.increment++;
    }

    //TEST ExistAuteur
    existAuteur(){
        this.state.auteurs.push(<Auteur key={this.state.increment} titreTest={'ExistAuteur'} ok={false} />);
        this.state.increment++;
    }

    //Lien du bouton avec le render des réponses
    buttonPress(){
        let domContain = document.querySelector('#auteurServiceReturn');
        ReactDOM.render(this.state.auteurs, domContain);
    }

    render() {
        return (
            //IMPORTANT DE DÉFINIR L'ID DU BOUTON
            <button id='reactTestAuteurButton' onClick={this.buttonPress}>TestReact</button>
        )
    }
}
//Lien du bouton 'Test' avec React
var domContainer = document.querySelector('#testAuteurButton');
ReactDOM.render(<TestAuteur/>, domContainer);

///****** FIN MICRO-SERVICE AUTEUR ******////



////****** MICRO-SERVICE UTILISATEUR ******////

//Classe de données pour le micro-service Utilisateur
class Utilisateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: this.props.nom,
            prenom: this.props.prenom,
            cip: this.props.cip,
            mail: this.props.mail,
            nomDepartement: this.props.nomDepartement,
            nomFaculte: this.props.nomFaculte,
            titreTest: this.props.titreTest,    //Titre du test effectué
            ok: this.props.ok   //Boolean indiquant si le test à été réussi avec succès
        };
    }

    render() {
        if(this.state.ok != null){  //Est-ce que le test à été fait correctement
            if(this.state.ok){ //Test réussi
                return (
                    <div className='testReturnWrapper greenBckg'>
                        Test: {this.state.titreTest} |
                        {this.state.cip}: {this.state.prenom} {this.state.nom} |
                        {this.state.mail} |
                        {this.state.nomFaculte} {this.state.nomDepartement}
                    </div>
                );
            }
            else{
                return ( //Test échoué
                    <div className='testReturnWrapper redBckg'>
                        Test: {this.state.titreTest} |
                        {this.state.cip}:
                        {this.state.prenom} {this.state.nom} |
                        {this.state.mail} |
                        {this.state.nomFaculte} {this.state.nomDepartement}
                    </div>
                );
            }
        }
        else{
            return ( //Test non fonctionnel ou impossibilité de déterminer l'issue
                <div className='testReturnWrapper'>
                    Test: {this.state.titreTest} |
                    {this.state.cip}:
                    {this.state.prenom} {this.state.nom} |
                    {this.state.mail} |
                    {this.state.nomFaculte} {this.state.nomDepartement}
                </div>
            );
        }
    }
}

//Classe des tests du micro-service
class TestUtilisateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            utilisateurs: [],
            increment: this.props.increment
        };

        this.state.increment = 0;

        //Éxectuer tout les tests du micro-service
        this.executerTests();

        // This binding is necessary to make `this` work in the callback
        this.buttonPress = this.buttonPress.bind(this);
    }

    //Éxecute tout les tests
    executerTests(){
        this.testSelectUtilisateurs();
        this.testSelectUtilisateurByCip("durp0701");
        this.selectUtilisateurByFaculte("Génie");
        this.selectUtilisateurByDepartement("Électrique et informatique");
        this.insertUtilisateur();
        this.loggedUtilisateur();
    }

    //TEST SelectUtilisateurs
    testSelectUtilisateurs(){
        fetch("/Volos/api/selectUtilisateurs")
            .then(data => data.json())
            .then(utilisateurs => {
                utilisateurs.forEach(utilisateur => {
                    this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                           mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                           nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateur'} ok={null} />)
                    this.state.increment++;
                });
            });
    }

    //TEST SelectUtilisateurByCip
    testSelectUtilisateurByCip(cip){
        //Possibilié de modifier le cip recherché
        fetch('/Volos/api/selectUtilisateurByCip?cip='+cip)
            .then(data => data.json())
            .then(utilisateur => {

                //Vérification du cip recherché
                if(utilisateur.cip === cip){  //RÉUSSI
                    this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                          mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                          nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByCip'} ok={true} />)
                }
                else{   //ÉCHOUÉ
                    this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                          mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                          nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByCip'} ok={false} />)
                }
                this.state.increment++;
            })
    }

    //TEST SelectUtilisateurByFaculte
    selectUtilisateurByFaculte(faculte){
        fetch("/Volos/api/selectUtilisateurByFaculte?faculte="+faculte)
            .then(data => data.json())
            .then(utilisateurs => {
                utilisateurs.forEach(utilisateur => {

                    //Vérification du cip recherché
                    if(utilisateur.nomFaculte === faculte){  //RÉUSSI
                        this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByFaculte'} ok={true} />)
                    }
                    else{   //ÉCHOUÉ
                        this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByFaculte'} ok={false} />)
                    }

                    this.state.increment++;
                });
            })
    }

    //TEST SelectUtilisateurByDepartement
    selectUtilisateurByDepartement(departement){
        fetch("/Volos/api/selectUtilisateurByDepartement?departement="+departement)
            .then(data => data.json())
            .then(utilisateurs => {
                utilisateurs.forEach(utilisateur => {

                    //Vérification du cip recherché
                    if(utilisateur.nomDepartement === departement){  //RÉUSSI
                        this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByDepartement'} ok={true} />)
                    }
                    else{   //ÉCHOUÉ
                        this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByDepartement'} ok={false} />)
                    }

                    this.state.increment++;
                });
            })
    }

    //TEST InsertUtilisateur
    insertUtilisateur(){
        this.state.utilisateurs.push(<Utilisateur key={this.state.increment} titreTest={'InsertUtilisateur'} ok={false}/>);
        this.state.increment++;
    }

    //TEST LoggedUtilisateur
    loggedUtilisateur(){
        fetch("/Volos/api/loggedUtilisateur")
            .then(data => data.json())
            .then(utilisateur => {
                this.state.utilisateurs.push(<Utilisateur key={this.state.increment} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                           mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                           nomDepartement={utilisateur.nomDepartement} titreTest={'LoggedUtilisateur'} ok={null} />)
                this.state.increment++;
            });
    }

    //Lien du bouton avec le render des réponses
    buttonPress(){
        let domContain = document.querySelector('#utilisateurServiceReturn');
        ReactDOM.render(this.state.utilisateurs, domContain);
    }

    render() {
        return (
            //IMPORTANT DE DÉFINIR L'ID DU BOUTON
            <button id='reactTestUtilisateurButton' onClick={this.buttonPress}>TestReact</button>
        )
    }
}
//Lien du bouton 'Test' avec React
var domContainer = document.querySelector('#testUtilisateurButton');
ReactDOM.render(<TestUtilisateur/>, domContainer);

////****** FIN MICRO-SERVICE UTILISATEUR ******////



////****** MICRO-SERVICE ANNONCE ******////
//Classe de données pour le micro-service Annonce
class Annonce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titre: this.props.titre,
            description: this.props.description,
            id: this.props.id,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            cip: this.props.cip,
            categorie: this.props.categorie,
            etat: this.props.etat,
            titreTest: this.props.titreTest,    //Titre du test effectué
            ok: this.props.ok   //Boolean indiquant si le test à été réussi avec succès
        };
    }

    render() {
        let dateAffichage = new Date(this.state.dateAffichage);

        dateAffichage = dateAffichage.getDate() + "-" + (dateAffichage.getMonth()+1)

            + "-" + dateAffichage.getFullYear();
        if(this.state.ok != null){  //Est-ce que le test à été fait correctement
            if(this.state.ok){ //Test réussi
                return (
                    <div className='testReturnWrapper greenBckg'>
                        Test: {this.state.titreTest} |
                        {this.state.id}: {this.state.titre} {this.state.description} |
                        {this.state.prix} | {dateAffichage} |
                        {this.state.cip} | {this.state.etat} |
                        {this.state.categorie}
                    </div>
                );
            }
            else{
                return ( //Test échoué
                    <div className='testReturnWrapper redBckg'>
                        Test: {this.state.titreTest} |
                        {this.state.id}: {this.state.titre} {this.state.description} |
                        {this.state.prix} | {dateAffichage} |
                        {this.state.cip} | {this.state.etat} |
                        {this.state.categorie}
                    </div>
                );
            }
        }
        else{
            return ( //Test non fonctionnel ou impossibilité de déterminer l'issue
                <div className='testReturnWrapper'>
                    Test: {this.state.titreTest} |
                    {this.state.id}: {this.state.titre} {this.state.description} |
                    {this.state.prix} | {dateAffichage} |
                    {this.state.cip} | {this.state.etat} |
                    {this.state.categorie}
                </div>
            );
        }
    }
}

//Classe des tests du micro-service
class TestAnnonce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces: [],
            increment: this.props.increment
        };

        this.state.increment = 0;

        //Éxectuer tout les tests du micro-service
        this.executerTests();

        // This binding is necessary to make `this` work in the callback
        this.buttonPress = this.buttonPress.bind(this);
    }

    //Éxecute tout les tests
    executerTests(){
        this.testAnnonces();
        this.testAnnonceById(1);
        this.testAnnonceById(0);
        this.testAnnoncesByCip("boui2215");
        this.testOpenAnnonce(13);
        this.testAnnoncePublishedByCategorie("LIVRE");
        this.testAnnoncePublishedByCategorie("LOYER");
        this.testAnnoncePublishedByCategorie("AUTRE");
        this.testAnnonceNouveauxByCategorie("LIVRE");
        this.testAnnonceNouveauxByCategorie("LOYER");
        this.testAnnonceNouveauxByCategorie("AUTRE");
        this.testFindLastIdAnnonce();
    }

    //TEST annonceById
    testAnnonceById(id) {
        fetch("/Volos/api/annonceById?id="+id)
            .then(data => data.json())
            .then(annonce => {
                //Vérification de l'id recherché
                if(annonce.id === id){  //RÉUSSI
                    this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                      cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                      prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                      etat={annonce.etat} titreTest={'annonceById'} ok={true} />)
                }
                else{   //ÉCHOUÉ
                    this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                      cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                      prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                      etat={annonce.etat} titreTest={'annonceById'} ok={false} />)
                }

                this.state.increment++;
            });
    }

    //TEST annoncesByCip
    testAnnoncesByCip(cip) {
        fetch("/Volos/api/annoncesByCip?cip="+cip)
            .then(data => data.json())
            .then(annonces => {
                annonces.forEach(annonce => {
                    //Vérification du cip recherché
                    if(annonce.cip === cip){  //RÉUSSI
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'annoncesByCip'} ok={true} />)
                    }
                    else{   //ÉCHOUÉ
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'annoncesByCip'} ok={false} />)
                    }

                    this.state.increment++;
                });
            });
    }

    //TEST annonces
    testAnnonces() {
        fetch("/Volos/api/annonces")
            .then(data => data.json())
            .then(annonces => {
                annonces.forEach(annonce => {
                    //À VÉRIFIER MANUELLEMENT
                    this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                      cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                      prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                      etat={annonce.etat} titreTest={'annonces'} ok={null} />)

                    this.state.increment++;
                });
            });
    }

    //TEST openAnnonce
    testOpenAnnonce(id) {
        fetch("/Volos/api/openAnnonce?id="+id)
            .then(() =>
                fetch("/Volos/api/annonceById?id="+id)
                    .then(data => data.json())
                    .then(annonce => {
                        //Vérification de l'id recherché
                        if(annonce.etat == 0){  //RÉUSSI
                            this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                              cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                              prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                              etat={annonce.etat} titreTest={'openAnnonce'} ok={true} />)
                        }
                        else{   //ÉCHOUÉ
                            this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                              cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                              prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                              etat={annonce.etat} titreTest={'openAnnonce'} ok={false} />)
                        }

                        this.state.increment++;

                        this.testCancelAnnonce(id);
                    })
            );
    }

    //TEST cancelAnnonce
    testCancelAnnonce(id) {
        fetch("/Volos/api/cancelAnnonce?id="+id)
            .then(() =>
                fetch("/Volos/api/annonceById?id="+id)
                    .then(data => data.json())
                    .then(annonce => {
                        //Vérification de l'id recherché
                        if(annonce.etat == 1){  //RÉUSSI
                            this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                              cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                              prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                              etat={annonce.etat} titreTest={'cancelAnnonce'} ok={true} />)
                        }
                        else{   //ÉCHOUÉ
                            this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                              cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                              prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                              etat={annonce.etat} titreTest={'cancelAnnonce'} ok={false} />)
                        }

                        this.state.increment++;

                        this.testAnnonceVendue(id);
                    })
            );
    }

    //TEST annonceVendue
    testAnnonceVendue(id) {
        fetch("/Volos/api/annonceVendue?id="+id)
            .then(() =>
                fetch("/Volos/api/annonceById?id="+id)
                    .then(data => data.json())
                    .then(annonce => {
                        //Vérification de l'id recherché
                        if(annonce.etat == 2){  //RÉUSSI
                            this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                              cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                              prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                              etat={annonce.etat} titreTest={'annonceVendue'} ok={true} />)
                        }
                        else{   //ÉCHOUÉ
                            this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                              cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                              prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                              etat={annonce.etat} titreTest={'annonceVendue'} ok={false} />)
                        }

                        this.state.increment++;
                    })
            );
    }

    //TEST annoncePublishedByCategorie
    testAnnoncePublishedByCategorie(categorie) {
        fetch("/Volos/api/annoncePublishedByCategorie?categorie="+categorie)
            .then(data => data.json())
            .then(annonces => {
                annonces.forEach(annonce => {
                    //Vérification de le catégorie recherché
                    if(annonce.categorie == categorie){  //RÉUSSI
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'annoncePublishedByCategorie'} ok={true} />)
                    }
                    else{   //ÉCHOUÉ
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'annoncePublishedByCategorie'} ok={false} />)
                    }
                    this.state.increment++;
                });
            });
    }

    //TEST annonceNouveauxByCategorie
    testAnnonceNouveauxByCategorie(categorie) {
        console.log("début");
        fetch("/Volos/api/annonceNouveauxByCategorie?categorie="+categorie)
            .then(data => data.json())
            .then(annonces => {
                console.log("annonces : " + annonces);
                annonces.forEach(annonce => {
                    console.log("annonce : " + annonce);
                    if(annonce.categorie == categorie){  //À VÉRIFIER MANUELLEMENT
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'annonceNouveauxByCategorie'} ok={null} />)
                    }
                    else{   //ÉCHOUÉ
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'annonceNouveauxByCategorie'} ok={false} />)
                    }
                    this.state.increment++;
                });
            });
        console.log("fin");
    }

    //TEST findLastIdAnnonce
    testFindLastIdAnnonce() {
        fetch("/Volos/api/findLastIdAnnonce")
            .then(data => data.json())
            .then(dernierId => {
                fetch("/Volos/api/annonceById?id="+dernierId)
                    .then(data => data.json())
                    .then(annonce => {
                        //À VÉRIFIER MANUELLEMENT
                        this.state.annonces.push(<Annonce key={this.state.increment} titre={annonce.titre} description={annonce.description}
                                                          cip={annonce.cip} categorie={annonce.categorie} id={annonce.id}
                                                          prix={annonce.prix} dateAffichage={annonce.dateAffichage}
                                                          etat={annonce.etat} titreTest={'findLastIdAnnonce'} ok={null} />)

                        this.state.increment++;
                    })
            });
    }

    //Lien du bouton avec le render des réponses
    buttonPress(){
        let domContain = document.querySelector('#annonceServiceReturn');
        ReactDOM.render(this.state.annonces, domContain);
    }

    render() {
        return (
            //IMPORTANT DE DÉFINIR L'ID DU BOUTON
            <button id='reactTestAnnonceButton' onClick={this.buttonPress}>TestReact</button>
        )
    }
}

//Lien du bouton 'testAnnonceButton' avec React
domContainer = document.querySelector('#testAnnonceButton');
ReactDOM.render(<TestAnnonce/>, domContainer);/**/
////****** FIN MICRO-SERVICE ANNONCE ******////