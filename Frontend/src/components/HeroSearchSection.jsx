import { useEffect } from 'react';
import bannerBg from '../assets/images/ban-bg.jpg';
import bannerImg from '../assets/images/banner.jpg';
import coupleImg1 from '../assets/images/couples/1.jpg';
import coupleImg2 from '../assets/images/couples/2.jpg';

export default function HeroSearchSection() {
  useEffect(() => {
    if (window.$ && window.$.fn.slick) {
      const $carousel = $('.ban-sli');
      if ($carousel.length && !$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          fade: true,
          cssEase: 'linear'
        });
      }
    }
  }, []);

  return (
    <>
      {/* BANNER & SEARCH */}
      <section>
        <div className="str">
          <div className="hom-head">
            <div className="container">
              <div className="row">
                <div className="hom-ban-wrapper">
                  <div className="ban-tit" style={{ textAlign: 'left', color: '#fff', padding: '20px 0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', textTransform: 'uppercase', fontWeight: '300', fontSize: '24px' }}>
                      <i className="no1" style={{ fontSize: '70px', fontWeight: '900', fontStyle: 'normal', marginRight: '15px', color: 'rgba(255,255,255,0.8)', fontFamily: 'serif' }}>#1</i> 
                      <span style={{ borderTop: '1px solid rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '5px 0', letterSpacing: '3px' }}>Matrimony</span>
                    </span>
                    <h1 style={{ fontSize: '50px', fontWeight: 'bold', lineHeight: '1.1', margin: '10px 0' }}>
                      <span style={{ display: 'block', fontSize: '40px', fontWeight: '300', opacity: '0.9' }}>Find your</span>
                      <b style={{ color: '#df3535', fontSize: '1.4em', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Right Match</b> 
                      <span style={{ fontSize: '30px', fontWeight: '300', marginLeft: '10px', opacity: '0.8' }}>here</span>
                    </h1>
                    <p style={{ fontSize: '20px', fontWeight: '400', letterSpacing: '0.5px', marginTop: '15px', color: 'rgba(255,255,255,0.9)' }}>Most trusted Matrimony Brand in the World.</p>
                  </div>
                  <div className="ban-search-vertical chosenini">
                    <form>
                      <div className="form-group">
                        <label>Looking For</label>
                        <select className="chosen-select">
                          <option value="">Groom</option>
                          <option value="Men">Groom</option>
                          <option value="Women">Bride</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Age</label>
                        <input type="range" className="age-range" min="18" max="100" defaultValue="25" />
                      </div>
                      <div className="form-group age-range-inputs">
                        <input type="number" className="age-min" placeholder="25" defaultValue="25" min="18" max="100" />
                        <span className="age-separator">to</span>
                        <input type="number" className="age-max" placeholder="35" defaultValue="35" min="18" max="100" />
                      </div>
                      <div className="form-group">
                        <label>Community</label>
                        <select className="chosen-select">
                          <option>Choose your Christian Community</option>
                          <option>Any</option>
                          <option>Hindu</option>
                          <option>Muslim</option>
                          <option>Jain</option>
                          <option>Christian</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="submit" className="search-btn" defaultValue="Search" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* BANNER SLIDER */}
      <section>
        <div className="hom-ban-sli">
          <div>
            <ul className="ban-sli">
              <li>
                <div>
                  <img src={bannerBg} alt="" loading="lazy" />
                </div>
              </li>
              <li>
                <div>
                  <img src={bannerImg} alt="" loading="lazy" />
                </div>
              </li>
              <li>
                <div>
                  <img src={coupleImg1} alt="" loading="lazy" />
                </div>
              </li>
              <li>
                <div>
                  <img src={coupleImg2} alt="" loading="lazy" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* END */}
    </>
  );
}
