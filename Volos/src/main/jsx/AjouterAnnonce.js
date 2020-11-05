//Classe form
class FormAnnonce extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            categorie: 'autre',
            titre: '',
            description: '',
            prix: '',
            livreResume: '',
            livreMaisonEdition: '',
            livreDatePublication: '',
            livreNomAuteur: '',
            livrePrenomAuteur: '',
            loyerTaille: '',
            loyerDateDebutLocation: '',
            loyerDateFinLocation: ''
        };

        this.onChange = this.onChange.bind(this);
        this.selectChange = this.selectChange.bind(this)
        this.sumbitHandler = this.sumbitHandler.bind(this);
    }

    onChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    selectChange(event) {
        this.setState({categorie: event.target.value}, () => {  //setState = Async
            let categoryHTML = '';

            if(this.state.categorie == "livre"){
                categoryHTML = (
                    <fragment>
                        <div>
                            <label className="ajout_type resumeLabel">Résumé:</label>
                            <textarea
                                className="resumeText ajout_input"
                                name="livreResume"
                                defaultValue={this.state.livreResume}
                                onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <label className="ajout_type">Maison d'édition:</label>
                            <input className="ajout_input"
                                type="text"
                                name="livreMaisonEdition"
                                id="inputLivreMaisonEdition"
                                onChange={this.onChange}
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <label className="ajout_type">Date de publication:</label>
                            <input className="ajout_input"
                                type="date"
                                name="livreDatePublication"
                                id="inputLivreDatePublication"
                                onChange={this.onChange}
                                required
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <label className="ajout_type">Nom et prenom de l'auteur:</label>
                            <input className="ajout_input_Auteur"
                                   type="text"
                                   name="livreNomAuteur"
                                   id="inputLivreNomAuteur"
                                   placeholder="Nom"
                                   onChange={this.onChange}
                                   defaultValue=''
                            />
                            <input className="ajout_input_Auteur"
                                   type="text"
                                   name="livrePrenomAuteur"
                                   id="inputLivrePrenomAuteur"
                                   placeholder="Prenom"
                                   onChange={this.onChange}
                                   defaultValue=''
                            />
                        </div>
                    </fragment>
                );
            }
            else if (this.state.categorie == "loyer"){
                categoryHTML = (
                    <fragment>
                        <div>
                            <label className="ajout_type">Nombre de chambres:</label>
                            <input className="ajout_input"
                                type="text"
                                name="loyerTaille"
                                id="inputLoyerTaille"
                                onChange={this.onChange}
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <label className="ajout_type">Date de début de location:</label>
                            <input className="ajout_input"
                                type="date"
                                name="loyerDateDebutLocation"
                                id="inputLoyerDateDebutLocation"
                                onChange={this.onChange}
                                required
                                defaultValue=''
                            />
                        </div>
                        <div>
                            <label className="ajout_type">Date de fin de location:</label>;
                            <input className="ajout_input"
                                type="date"
                                name="loyerDateFinLocation"
                                id="inputLoyerDateFinLocation"
                                onChange={this.onChange}
                                required
                                defaultValue=''
                            />
                        </div>
                    </fragment>
                );
            }

            var domContainer = document.querySelector('#categoryDependent');
            ReactDOM.render(categoryHTML, domContainer);
        });
    }

    sumbitHandler(event) {
        event.preventDefault();

        let OK = true;
        //Vérification des données générales
        if(this.state.titre == null || this.state.titre == ''){
            document.getElementById("titreInput").classList.add("redBorder");
            OK = false;
        } else {
            document.getElementById("titreInput").classList.remove("redBorder");
        }

        if(this.state.prix == '' || !Number(this.state.prix)){
            document.getElementById("prixInput").classList.add("redBorder");
            OK = false;
        } else {
            document.getElementById("prixInput").classList.remove("redBorder");
        }
        //Vérification des données d'un livre
        if(this.state.categorie == 'livre'){
            if(this.state.livreMaisonEdition == ''){
                document.getElementById("inputLivreMaisonEdition").classList.add("redBorder");
                OK = false;
            } else {
                document.getElementById("inputLivreMaisonEdition").classList.remove("redBorder");
            }

            if(this.state.livreDatePublication == ''){
                document.getElementById("inputLivreDatePublication").classList.add("redBorder");
                OK = false;
            } else {
                document.getElementById("inputLivreDatePublication").classList.remove("redBorder");
            }

            if(this.state.livreNomAuteur == ''){
                document.getElementById("inputLivreNomAuteur").classList.add("redBorder");
                OK = false;
            } else {
                document.getElementById("inputLivreNomAuteur").classList.remove("redBorder");
            }

            if(this.state.livrePrenomAuteur == ''){
                document.getElementById("inputLivrePrenomAuteur").classList.add("redBorder");
                OK = false;
            } else {
                document.getElementById("inputLivrePrenomAuteur").classList.remove("redBorder");
            }
        }
        //Vérification des données d'un loyer
        if(this.state.categorie == 'loyer'){
            if(this.state.loyerTaille == '' ||
                this.state.loyerTaille != parseInt(this.state.loyerTaille, 10)){
                document.getElementById("inputLoyerTaille").classList.add("redBorder");
                OK = false;
            } else {
                document.getElementById("inputLoyerTaille").classList.remove("redBorder");
            }

            var debut = encodeURIComponent(this.state.loyerDateDebutLocation);
            var fin = encodeURIComponent(this.state.loyerDateFinLocation);
            if(debut >= fin) {
                document.getElementById("inputLoyerDateDebutLocation").classList.add("redBorder");
                document.getElementById("inputLoyerDateFinLocation").classList.add("redBorder");
                OK = false;
            } else {
                document.getElementById("inputLoyerDateDebutLocation").classList.remove("redBorder");
                document.getElementById("inputLoyerDateFinLocation").classList.remove("redBorder");
            }
        }

        //Faire un appel API si tout est correct
        if(OK){
            let callAPI = '';

            if(this.state.categorie == 'autre'){
                callAPI = "titre="+encodeURIComponent(this.state.titre)+"&description="+encodeURIComponent(this.state.description)
                    +"&prix="+encodeURIComponent(this.state.prix); //Annonce

                fetch('/Volos/api/addAutre?'+callAPI)
                    .then(function(response) {
                        if (response.ok) {
                            alert("AUTRE OK");
                        } else {
                            alert("AUTRE NOT OK");
                        }
                    });
            }
            else if(this.state.categorie == 'livre'){
                callAPI = "description="+encodeURIComponent(this.state.description)
                    +"&prix="+encodeURIComponent(this.state.prix)
                    +"&titre="+encodeURIComponent(this.state.titre) //Annonce
                    +"&resume="+encodeURIComponent(this.state.livreResume)
                    +"&maisonEdition="+encodeURIComponent(this.state.livreMaisonEdition)
                    +"&datePublication="+encodeURIComponent(this.state.livreDatePublication) //Livre
                    +"&nom="+encodeURIComponent(this.state.livreNomAuteur)
                    +"&prenom="+encodeURIComponent(this.state.livrePrenomAuteur);// Auteur

                fetch('/Volos/api/addLivre?'+callAPI)
                    .then(function(response) {
                            if (response.ok) {
                                alert("LIVRE OK");
                            } else {
                                alert("LIVRE NOT OK");
                            }
                        });
            }
            else if(this.state.categorie == 'loyer'){
                callAPI = "description="+encodeURIComponent(this.state.description)
                    +"&prix="+encodeURIComponent(this.state.prix)
                    +"&titre="+encodeURIComponent(this.state.titre) //Annonce
                    +"&nbChambre="+encodeURIComponent(this.state.loyerTaille)
                    +"&dateDebutLocation="+encodeURIComponent(this.state.loyerDateDebutLocation)
                    +"&dateFinLocation="+encodeURIComponent(this.state.loyerDateFinLocation); //Loyer

                fetch('/Volos/api/addLoyer?'+callAPI)
                    .then(function(response) {
                        if (response.ok) {
                            alert("LOYER OK");
                        } else {
                            alert("LOYER NOT OK");
                        }
                    });
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.sumbitHandler}>
                <div className="titre">
                    <label className="ajout_type">Titre:</label>
                    <input className="ajout_input"
                        type="text"
                        name="titre"
                        id="titreInput"
                        onChange={this.onChange}
                    />
                </div>
                <div className="categorie">
                    <label className="ajout_type">Catégorie:</label>
                    <select className="ajout_input" name="categorie" onChange={this.selectChange}>
                        <option value="autre">Autre</option>
                        <option value="livre">Livre</option>
                        <option value="loyer">Loyer</option>
                    </select>
                    <div id="categoryDependent"></div>
                </div>
                <div className="prix">
                    <label className="ajout_type">Prix:</label>
                    <input className="ajout_input"
                        type="text"
                        name="prix"
                        id="prixInput"
                        onChange={this.onChange}
                    />
                </div>
                <div className="description">
                    <label className="ajout_type descriptionLabel">Description:</label>
                    <textarea
                        className="descriptionText ajout_type"
                        name="description"
                        defaultValue={this.state.description}
                        onChange={this.onChange}
                    />
                </div>
                <div className="photo">
                    <p>
                        <button>Ajouter une photo</button>
                    </p>
                </div>
                <div className="buttonsAjout">
                    <span className="AnnulerAjout">
                        <a className="annulerBtn" href="index.html">Annuler</a>
                    </span>
                    <span className="PublierAjout">
                        <input className="publierBtn"
                            type="submit"
                            value="Publier"
                        />
                    </span>
                </div>

            </form>
        );
    }
}
var domContainer = document.querySelector('#annonceForm');
ReactDOM.render(<FormAnnonce/>, domContainer);