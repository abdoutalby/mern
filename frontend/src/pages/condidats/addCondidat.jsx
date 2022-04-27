import React from 'react'

function addCondidat() {
  return (
    <>
      <div style={{backgroundColor: '#EFEFEF' }}  className="host">
    <div className="container-fluid mt-3">

        {/* <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="far fa-check-circle me-3"></i> <small>Votre compte est bien crée</small>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> --> */}

        <div className="row justify-content-center mb-5">
            <form className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                {/* <!-- <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="fas fa-exclamation-triangle me-3"></i> <small>Confirmation de mot de passe incorrect</small>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> --> */}
                <div className="d-flex justify-content-between">
                    <div className="form-group mb-3" style="width: 45%;">
                        <label className="mb-2">Nom :</label>
                        <input type="text"  name="nom" className="form-control" />
                    </div>
                    <div className="form-group mb-3" style="width: 45%;">
                        <label className="mb-2">Prenom :</label>
                        <input type="text"  name="prenom" className="form-control" />
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Email :</label>
                    <input type="email"  name="email" className="form-control" />
                </div>

                <div className="form-group mb-3">
                    <label className="mb-2">Telephone :</label>
                    <input type="tel"  name="telephone" className="form-control"/>
                </div>

                <div className="form-group mb-3">
                    <label className="mb-2">Identifiant :</label>
                    <input type="text"   name="identifiant" className="form-control"/>
                </div>


                <div className="form-group mb-3">
                    <label className="mb-2">Mot de passe :</label>
                    <input type="password"   name="password" className="form-control"/>
                </div>

          

                <div className="d-flex justify-content-center mb-2">
                    <button type="button"   className="btn" style="background-color:#005a81; color: #fff" >Ajouter</button>
                </div>
                </form>
        </div>
        </div>

        <div>
            <a  Link to="/" className="btn"><i className="fas fa-arrow-left me-2"></i> retour a la liste</a>
        </div>
    </div>
 </>
  )
 
            }
export default addCondidat
