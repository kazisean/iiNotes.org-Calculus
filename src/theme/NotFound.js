import React, { useEffect } from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {

  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <img src="img/404_cat.gif" alt="iiNotes 404 Not Found Cats Looking Gif" />
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="iiNotes 404 page not found">
                  Where are you going bro
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the iiNotes 404 page">
                  404 Error - Page Not Found
                </Translate>


              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the iinotes 404 page">
                  The cat squad ate your page
                </Translate>
                
              </p>


              <h2><a href="courses">← Back to Studying</a></h2>


            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}