import './fotter.stylesheet.scss';

const Fotter = () =>{
    return (
        <div className="fotter">
            <img src={process.env.PUBLIC_URL+"images/logo.png"} alt="logo" id="logo" />
            
            <div className="desc">
                <div className="address">
                    <small> add : 2E/198, NIT Faridabad, Haryana, india. </small>
                </div>

                <div className="contact">
                    <small>+91 826182917</small>
                </div>
            </div>
        </div>
    )
}
export default Fotter;