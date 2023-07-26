import Cviewer from "./certificateViewer";
import BookIcon from "./bookIcon";
export default function Education() {
  return (
    <div className="education__all__container" id="education">
      <h2 className="text-center" style={{color:"#ffffff"}}>
        <span className="tag">&lt;</span>Education
        <span className="tag">/&gt;</span>
      </h2>
      <div className="education__container container row mx-auto">
        <div className="education__section col-12 col-xl-6 my-4">
          <div className="profile__info w-100 d-flex gap-1">
          <BookIcon/>
            <div className="info__container d-flex flex-column">
            <h5 className="mt-1">
            Bachelor’s Degree in Computer Engineering - GPA (3.37)
            </h5>
            <h6 style={{color:"#bfc1c2"}}>Al-Balqa&apos; Applied University BAU</h6>
            <h6 style={{color:"#888b8d"}}>Sep 2018 - Oct 2022</h6>
            <Cviewer certificate="./certificate.jpg" title="Bachelor’s Degree in Computer Engineering"/>
            </div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="education__section col-12 col-xl-6 my-4">
          <div className="profile__info w-100 d-flex gap-1">
          <BookIcon/>
            <div className="info__container d-flex flex-column">
            <h5 className="mt-1">
            80 hours on Python from the Education For Employment
            </h5>
            <h6 style={{color:"#bfc1c2"}}>Education For Employment-Jordan</h6>
            <h6 style={{color:"#888b8d"}}>NOV 2022 - DEC 2022</h6>
            <Cviewer certificate="./pythonC.jpg" title="80 hours on Python from the Education For Employment"/>
            </div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="education__section col-12 col-xl-6 my-4">
          <div className="profile__info w-100 d-flex gap-1">
          <BookIcon/>
            <div className="info__container d-flex flex-column">
            <h5 className="mt-1">
            Soft Skills Training Course
            </h5>
            <h6 style={{color:"#bfc1c2"}}>Education For Employment-Jordan</h6>
            <h6 style={{color:"#888b8d"}}>NOV 2022 - DEC 2022</h6>
            <Cviewer certificate="./softC.jpg" title="Soft Skills Training Course"/>
            </div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="education__section col-12 col-xl-6 my-4">
          <div className="profile__info w-100 d-flex gap-1">
          <BookIcon/>
            <div className="info__container d-flex flex-column">
            <h5 className="mt-1">
            Complete Python Bootcamp from Zero to Hero in Python
            </h5>
            <h6 style={{color:"#bfc1c2"}}>Udemy</h6>
            <h6 style={{color:"#888b8d"}}>JUN 2022 - JUL 2022</h6>
            <Cviewer certificate="./python.jpg" title="Complete Python Bootcamp from Zero to Hero in Python"/>
            </div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="education__section col-12 col-xl-6 my-4">
          <div className="profile__info w-100 d-flex gap-1">
          <BookIcon/>
            <div className="info__container d-flex flex-column">
            <h5 className="mt-1">
            Web Scraping in Python with BeautifulSoup and Selenium
            </h5>
            <h6 style={{color:"#bfc1c2"}}>Udemy</h6>
            <h6 style={{color:"#888b8d"}}>OCT 2022 - NOV 2022</h6>
            <Cviewer certificate="./webscrap.jpg" title="Web Scraping in Python with BeautifulSoup and Selenium"/>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
