import './ImageCredit.styles.css';

const ImageCredit = ({ imgSrc, imgTitle, description, href, creator}) => {

    return (
        <div className="credit flex justify-center col-span-1 mx-auto" >

            <img src={imgSrc} alt={imgTitle} className="credit-img" /> 

            <div className="credit-info flex flex-col justify-center px-2">
                <p>{description}</p>
                <a href={href}>Created by: {creator}</a>
            </div>

        </div>
    )
}

export default ImageCredit;