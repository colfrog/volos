//CLASSE S'OCCUPANT D'EXÉCUTER TOUT LES TESTS DE MICRO-SERVICES
class TestsMicroServices extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.buttonPress = this.buttonPress.bind(this);
    }

    //AJOUTER UNE NOUVELLE LIGNE AVEC LE ID DE VOTRE BOUTTON
    buttonPress(){
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
/*class TestUtilisateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces: []
        };

        //Éxectuer tout les tests du micro-service
        this.executerTests();

        // This binding is necessary to make `this` work in the callback
        this.buttonPress = this.buttonPress.bind(this);
    }

    //Éxecute tout les tests
    executerTests(){

    }

    //TEST annonceById

    //TEST annoncesByCip

    //TEST annonces

    //TEST cancelAnnonce

    //TEST removeAnnonce

    //TEST annoncePublishLivres

    //TEST annoncePublishLoyers

    //TEST annoncePublishAutres

    //TEST annonceUtilisateur

    //TEST findLastIdAnnonce

    //Lien du bouton avec le render des réponses
    buttonPress(){
        let domContain = document.querySelector('#annonceServiceReturn');
        ReactDOM.render(this.state.utilisateurs, domContain);
    }

    render() {
        return (
            //IMPORTANT DE DÉFINIR L'ID DU BOUTON
            <button id='reactTestUtilisateurButton' onClick={this.buttonPress}>TestReact</button>
        )
    }
}

domContainer = document.querySelector('#testAnnonceButton');
ReactDOM.render(<TestUtilisateur/>, domContainer);*/
////****** FIN MICRO-SERVICE ANNONCE ******////