import React, { Component } from 'react';

class BreadCrumb extends Component {
  render() {
    const { breadCrumbTitle, pageName } = this.props;
    return (
      <React.Fragment>
        <section className='page-header page-header-bg'>
          <div className='container'>
            <div className='page-header_wrapper'>
              <h1 className='page-header_title'>{breadCrumbTitle}</h1>
              <div className='breadcrumb-wrapper'>
                <div className='breadcrumb-inner'>
                  <div className='breadcrumbs'>
                    <a href='https://ultraland.themetags.com/'>Home</a>
                    <span className='separator'></span>
                    <span> {pageName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default BreadCrumb;
