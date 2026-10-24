import img1 from"../assets/image1.png"
import img2 from"../assets/image2.png"
import img3 from"../assets/image3.png"

function home() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <img src={img1} alt="Description of the image" />
            <img src={img2} alt="Description of the image" />
            <img src={img3} alt="Description of the image" />
        </div>
    )
}
export default home