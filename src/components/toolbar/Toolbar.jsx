import './toolbar.css';

const Toolbar = () => {
  return (
    <header className='toolbarContainer'>
      <span className='toolbarBrand'>
        <div className='toolbarBrandLogo'>
          {/* <i className='fas fa-toolbox fa-lg center'></i> */}
          {/* <i className='fab fa-500px fa-lg center'></i> */}
          <i className='fab fa-dev fa-lg center'></i>
        </div>
        <div className='toolbarBrandName'>Social Connect</div>
      </span>
      <div className='toolbarIcons'>
        {/* <div className='toolbarIconsWrapper'> */}
        <div className='toolbarIconWrapper'>
          <div className='toolbarIconContainer'>
            <i className='fas fa-bell fa-lg center'></i>
            <span className='toobarIconBadge'>2</span>
          </div>
        </div>
        <div className='toolbarIconWrapper'>
          <div className='toolbarIconContainer'>
            <i className='fas fa-envelope fa-lg center'></i>
            <span className='toobarIconBadge'>10</span>
          </div>
        </div>

        <div className='toolbarIconWrapper'>
          <div className='toolbarIconContainer'>
            <i className='fas fa-user-cog fa-lg center'></i>
          </div>
        </div>

        {/* </div> */}
        <div className='toolbarAvatar'>
          <img
            src='https://media.vanityfair.com/photos/5ec1656e5af441fe3976daf4/master/pass/barack-obama.jpg'
            alt=''
            className='toolbarAvatarImg'
          />
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
