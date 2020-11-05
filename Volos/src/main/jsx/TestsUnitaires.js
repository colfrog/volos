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
            utilisateurs: []
        };

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
        /*this.insertUtilisateur("NomTest", "PrenomTest", "TEST6942",
                               "TEST6942@usherbrooke.ca", "Génie", "Électrique et informatique");*/
        this.loggedUtilisateur();
    }

    //TEST SelectUtilisateurs
    testSelectUtilisateurs(){
        let utis = this.state.utilisateurs;
        fetch("/Volos/api/selectUtilisateurs")
            .then(data => data.json())
            .then(utilisateurs => {
                utilisateurs.forEach(utilisateur => {
                    utis.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                           mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                           nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateur'} ok={null} />)
                });
                this.setState({utilisateurs: utis});
            });
    }

    //TEST SelectUtilisateurByCip
    testSelectUtilisateurByCip(cip){
        let uti = this.state.utilisateurs;
        //Possibilié de modifier le cip recherché
        fetch('/Volos/api/selectUtilisateurByCip?cip='+cip)
            .then(data => data.json())
            .then(utilisateur => {

                //Vérification du cip recherché
                if(utilisateur.cip === cip){  //RÉUSSI
                    uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                          mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                          nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByCip'} ok={true} />)
                    this.setState({utilisateurs: uti});
                }
                else{   //ÉCHOUÉ
                    uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                          mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                          nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByCip'} ok={false} />)
                    this.setState({utilisateurs: uti});
                }
            })
    }

    //TEST SelectUtilisateurByFaculte
    selectUtilisateurByFaculte(faculte){
        let uti = this.state.utilisateurs;
        fetch("/Volos/api/selectUtilisateurByFaculte?faculte="+faculte)
            .then(data => data.json())
            .then(utilisateurs => {
                utilisateurs.forEach(utilisateur => {

                    //Vérification du cip recherché
                    if(utilisateur.nomFaculte === faculte){  //RÉUSSI
                        uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByFaculte'} ok={true} />)
                        this.setState({utilisateurs: uti});
                    }
                    else{   //ÉCHOUÉ
                        uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByFaculte'} ok={false} />)
                        this.setState({utilisateurs: uti});
                    }
                });
            })
    }

    //TEST SelectUtilisateurByDepartement
    selectUtilisateurByDepartement(departement){
        let uti = this.state.utilisateurs;
        fetch("/Volos/api/selectUtilisateurByDepartement?departement="+departement)
            .then(data => data.json())
            .then(utilisateurs => {
                utilisateurs.forEach(utilisateur => {

                    //Vérification du cip recherché
                    if(utilisateur.nomDepartement === departement){  //RÉUSSI
                        uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByDepartement'} ok={true} />)
                        this.setState({utilisateurs: uti});
                    }
                    else{   //ÉCHOUÉ
                        uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                              mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                              nomDepartement={utilisateur.nomDepartement} titreTest={'SelectUtilisateurByDepartement'} ok={false} />)
                        this.setState({utilisateurs: uti});
                    }
                });
            })
    }

    //TEST InsertUtilisateur
    /*insertUtilisateur(nom, prenom, cip, mail, nomFaculte, nomDepartement){
        let uti = this.state.utilisateurs;

        let utilisateur = <Utilisateur
            nom={nom}
            prenom={prenom}
            cip={cip}
            mail={mail}
            nomFaculte={nomFaculte}
            nomDepartement={nomDepartement}
            titreTest={null}
            ok={null}/>

        fetch("/Volos/api/insertUtilisateur?utilisateur="+utilisateur)
            .then(data => {
                if(data.ok === false)
                {
                    uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                           mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                           nomDepartement={utilisateur.nomDepartement} titreTest={'InsertUtilisateur'} ok={false} />)
                    this.setState({utilisateurs: uti});
                }
                else
                {
                    uti.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                           mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                           nomDepartement={utilisateur.nomDepartement} titreTest={'InsertUtilisateur'} ok={null} />)
                    this.setState({utilisateurs: uti});
                }})
    }*/

    //TEST LoggedUtilisateur
    loggedUtilisateur(){
        let utis = this.state.utilisateurs;
        fetch("/Volos/api/loggedUtilisateur")
            .then(data => data.json())
            .then(utilisateur => {
                utis.push(<Utilisateur key={utilisateur.id} nom={utilisateur.nom} prenom={utilisateur.prenom} cip={utilisateur.cip}
                                           mail={utilisateur.mail} nomFaculte={utilisateur.nomFaculte}
                                           nomDepartement={utilisateur.nomDepartement} titreTest={'LoggedUtilisateur'} ok={null} />)
            });
        this.setState({utilisateurs: utis});
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