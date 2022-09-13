import React from 'react'
import PageHeaderStc from './pageHeader.stc'
function PageHeader(props) {
  return (
    <PageHeaderStc>
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-undefined css-tauc87">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-8 css-1qbi2b5 main_bar">
                <h4 className="MuiTypography-root MuiTypography-h4 css-1dg4zsn"></h4>
                <nav className="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root css-1beopxm" aria-label="breadcrumb">
                    <ol className="MuiBreadcrumbs-ol css-nhb8h9">
                        <li className="MuiBreadcrumbs-li">
                            <div><a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone css-1qeofn3" href="#/">Home</a></div>
                        </li>
                        <li aria-hidden="true" className="MuiBreadcrumbs-separator css-3mf706">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="NavigateNextIcon">
                                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                            </svg>
                        </li>
                        <li className="MuiBreadcrumbs-li">
                            <div><p style={{margin:0}} className="MuiTypography-root MuiTypography-body1 css-iel8zu">Shopss </p></div>
                        </li>
                    </ol>
                </nav>
                <h1 className="MuiTypography-root MuiTypography-h1 css-czbdxj">{props.title}</h1>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-4 css-pgm6sf">
                <div className="MuiBox-root css-1a6nztw"></div>
            </div>
        </div>
    </PageHeaderStc>
  )
}

export default PageHeader