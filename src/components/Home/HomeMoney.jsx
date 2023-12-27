const HomeMoney = () => {
  return (
    <div className="container mx-auto">
      <div className="row mx-5">
        <div className="col-lg-6 col-12 py-5 my-5">
          <div className="d-flex align-items-center gap-4 home-left">
            <img src="/images/homeleft.png" alt="" />
            <div>
              <h5>Start making money!</h5>
              <p>
                Do you have something to sell? Post your first ad and start
                making money!
              </p>
              <button>
                <i className="bi bi-plus-circle-fill me-2"></i>Post your add for
                free
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 py-5 my-5">
          <div className="home-left">
            <div>
              <h4 className="text-primary fw-bold">
                <i className="bi bi-reddit fs-4"></i> Gorib
                <span className="fw-normal">jobs</span>
              </h4>
              <p>
                Looking to hire or get hired in Bangladesh ? Get access to 800k+
                CVs or browse through 800+ job vacancies!
              </p>
              <button className="btn bg-primary text-white px-5">
                Explore me free
                <i class="bi bi-caret-right-fill ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMoney;
