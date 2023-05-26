import { ImageAspectRatioSharp } from "@mui/icons-material"
import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span className="title">Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <span>Vinal Munasinghe</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>reject</button>

                        </div>
                    </div>

                </div>
                </div>  
        </div>
    )
}

export default RightBar
