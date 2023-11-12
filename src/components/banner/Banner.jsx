import './banner.scss'

function Banner({image, text, className}) {
    return (
    <div className={`banner ${className}`}>
        <img src={image} alt='banner_img' className='banner_img'/>
        <h1 className='banner_text'>{text}</h1>
    </div>
    );
}
export default Banner