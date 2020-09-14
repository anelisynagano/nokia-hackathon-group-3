import React from 'react';

const Banners = () => {
    return(
        <div className="bannersWrapper">

                <div className="banner" id="banner1">
                    <div className="bannerImage">
                        <img src="./images/banner1.jpg" />
                    </div>
                    <div className="bannerContent">
                        <div className="bannerIcon">
                            <img src="./images/durability.png" />
                        </div>
                        <div className="bannerText">
                            <h2>Built to last</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
                <div className="banner" id="banner2">
                    <div className="bannerImage">
                        <img src="./images/banner2.jpg" />
                    </div>
                    <div className="bannerContent">
                        <div className="bannerIcon">
                            <img src="./images/4g.png" />
                        </div>
                        <div className="bannerText">
                            <h2>Stay connected</h2>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
                <div className="banner" id="banner3">
                    <div className="bannerImage">
                        <img src="./images/banner3.png" />
                    </div>
                    <div className="bannerContent">
                        <div className="bannerIcon">
                            <img src="./images/design.png" />
                        </div>
                        <div className="bannerText">
                            <h2>Iconic designs</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                            <div className="underline"></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default Banners;
