import './ImageAndContent.styles.css';

const ImageAndContent = ({ imgSrc, imgTitle, children, cardStyle, imgStyle, contentStyle}) => {

    return (
        <div className="card flex justify-center col-span-1 mx-auto" style={cardStyle ?? {}} >

            {imgSrc && <img src={imgSrc} alt={imgTitle} className="card-img" style={imgStyle ?? {}} /> }

            <div className="card-content flex flex-col justify-center px-2" style={contentStyle ?? {}}>
                {children}
            </div>

        </div>
    )
}

export default ImageAndContent;