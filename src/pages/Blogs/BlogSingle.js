import React from 'react';
import BlogHeader from '../../components/Blogs/BlogHeader';
import { Link } from 'react-router-dom';
import FooterOne from '../../layout/Footer/FooterOne';
import NavRightTwo from '../../components/NavRight/NavRightTwo';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout';

const BlogSingle = () => {
  return (
    <Layout>
      <Navbar logoLight navRight={<NavRightTwo />} />
      <div id='main_content'>
        <BlogHeader />
        <div className='blog-single'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='blog-single-content'>
                  <p>
                    Do one bamboozled cuppa I don't want no agro gosh cras I'm
                    telling fantastic barney sloshed, plastered owt to do with
                    me pear shaped ruddy knees up well morish cheesed off. Lemon
                    squeezy have it tomfoolery pardon you bevvy jolly good say
                    the bee's knees sloshed me old mucker, the wireless hotpot
                    super Harry pardon me bits and bobs chinwag faff about so I
                    said, tosser fantastic cheeky bugger William cheeky bonnet
                    David the BBC. He legged it golly gosh Eaton bender butty A
                    bit of how's your father cack I horse play tinkety tonk old
                    fruit skive off nancy boy cockup amongst, Charles cras what
                    a plonker owt to do with me happy days bugger do one loo
                    chip shop Oxford bodge cheesed off baking cakes, a blinding
                    shot spend a penny young delinquent my good sir mush
                    bleeding cobblers nice one are you taking.
                  </p>

                  <p>
                    My lady he lost his bottle what a plonker bamboozled easy
                    peasy I blag happy days posh burke knees up, excuse my
                    French only a quid knackered dropped a clanger chinwag
                    quaint starkers say tickety-boo porkies. Bugger all mate
                    arse so I said brilliant young delinquent pear shaped
                    wellies harry knees up, nancy boy grub.
                  </p>

                  <div className='details-image'>
                    <img src='media/blog/single.jpg' alt='Single' />
                  </div>

                  <h3 className='title'>
                    Letter of Interest: Purpose, Example & Tips
                  </h3>

                  <p>
                    Nice one A bit of how's your father off his nut gutted mate
                    bender plastered argy-bargy he lost his bottle blimey cras
                    owt to do with me I the wireless do one, such a fibber Eaton
                    I don't want no agro mufty cracking goal bugger all mate
                    give us a bell bleeder dropped a clanger knackered skive off
                    you mug. Easy peasy give us a bell codswallop smashing Harry
                    gutted mate boot Elizabeth bum bag bite your arm off barmy
                    plastered a load of old tosh, excuse my French young
                    delinquent bleeder have it cras bugger super the wireless
                    amongst tomfoolery. Absolutely bladdered burke amongst matie
                    boy bugger all mate cup of tea cor blimey guvnor tinkety
                    tonk.
                  </p>

                  <blockquote className='wp-block-quote'>
                    <p>
                      So I said tosser boot twit lurgy eaton bloke public school
                      arse bleeding chimney pot lost.
                    </p>
                    <cite>Lance Bogrol</cite>
                    <img src='media/blog/quote.png' alt='quote' />
                  </blockquote>

                  <p>
                    Easy peasy give us a bell codswallop smashing Harry gutted
                    mate boot Elizabeth bum bag bite your arm off barmy
                    plastered a load of old tosh, excuse my French young
                    delinquent bleeder have it cras bugger super the wireless
                    amongst tomfoolery. Absolutely bladdered burke amongst matie
                    boy bugger all mate cup of tea cor blimey guvnor tinkety
                    tonk old fruit old David zonked, lemon squeezy tickety-boo a
                    blinding shot naff bits and bobs a load of old tosh jolly
                    good arse what a load of rubbish cup of char, excuse my
                    french horse play.
                  </p>

                  <ul>
                    <li>Decorate for Less with art posters</li>
                    <li>
                      Bunce That Developers Homework Passes pot Undergraduate.
                    </li>
                    <li>Using Banner Stands To Increase</li>
                    <li>Internet Advertising What Went Wrong</li>
                    <li>Advertising Most Reliable</li>
                  </ul>

                  <p>
                    Only a quid don't get shirty with me absolutely bladdered my
                    lady my good sir hunky dory show off pick your nose and blow
                    off bevvy bog-standard young delinquent, bloke up the kyver
                    james bond give us a bell spiffing good time mush chip shop
                    cheesed.
                  </p>
                </div>

                <div className='blog-single-footer'>
                  <ul className='taglist'>
                    <li>
                      <Link to='#'>Startup</Link>
                    </li>
                    <li>
                      <Link to='#'>WordPress</Link>
                    </li>
                    <li>
                      <Link to='#'>Services</Link>
                    </li>
                  </ul>

                  <div className='blog-share-wrap'>
                    <h4 className='title'>Share This</h4>
                    <ul className='blog-share-sociali-link'>
                      <li>
                        <Link to='#'>
                          <i className='ei ei-social_facebook'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='ei ei-social_twitter'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='ei ei-social_vimeo'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='#'>
                          <i className='ei ei-social_pinterest'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='single-post-navigation'>
                  <div className='row no-gutters'>
                    <div className='col-md-6'>
                      <div className='post-previous'>
                        <Link to='#' className='single-post-nav'>
                          <div className='post-nav-wrapper'>
                            <p className='post-nav-title'>Preovious Post</p>
                            <h4 className='post-title'>
                              How to manage Facebook ads for clients the right
                              way
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='post-next'>
                        <Link to='#' className='single-post-nav'>
                          <div className='post-nav-wrapper'>
                            <p className='post-nav-title'>Next Post</p>
                            <h4 className='post-title'>
                              IOS 14 and Facebook ads: All you need to know
                            </h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='related-post-wrapper'>
                  <h2 className='related-title'>Related News</h2>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='related-post'>
                        <div className='feature-image'>
                          <Link to='#'>
                            <img
                              src='media/blog/re1.jpg'
                              className='attachment-post-thumbnail'
                              alt='releted post'
                            />
                          </Link>
                        </div>
                        <div className='blog-content'>
                          <ul className='post-meta'>
                            <li>
                              <Link to='#' rel='category tag'>
                                Marketing
                              </Link>
                            </li>
                            <li>
                              <span className='posted-on'>
                                <Link to='#'>April 11, 2021</Link>
                              </span>
                            </li>
                          </ul>

                          <h3 className='post-title'>
                            <Link to='#'>
                              iOS 14 and Facebook ads: All you need to know
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-4'>
                      <div className='related-post'>
                        <div className='feature-image'>
                          <Link to='#'>
                            <img src='media/blog/re1.jpg' alt='releted post' />
                          </Link>
                        </div>
                        <div className='blog-content'>
                          <ul className='post-meta'>
                            <li>
                              <Link to='#'>Marketing</Link>
                            </li>
                            <li>
                              <span className='posted-on'>
                                <Link to='#'>April 11, 2021</Link>
                              </span>
                            </li>
                          </ul>

                          <h3 className='post-title'>
                            <Link to='#'>The Advanced Guide to Ultraland </Link>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-4'>
                      <div className='related-post'>
                        <div className='feature-image'>
                          <Link to='#'>
                            <img src='media/blog/re3.jpg' alt='releted post' />
                          </Link>
                        </div>
                        <div className='blog-content'>
                          <ul className='post-meta'>
                            <li>
                              <Link to='#'>Marketing</Link>
                            </li>
                            <li>
                              <span className='posted-on'>
                                <Link to='#'>April 11, 2021</Link>
                              </span>
                            </li>
                          </ul>

                          <h3 className='post-title'>
                            <Link to='#'>
                              IOS 14 and Facebook ads: All you need to know{' '}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='comments'>
                  <div className='comment-list-wrapper'>
                    <h3 className='comments-title'>
                      Comments <span className='number-comments'>(3)</span>{' '}
                    </h3>

                    <ol className='comment-list'>
                      <li className='comment'>
                        <div id='comment-2' className='comment-body'>
                          <div className='comment-avatar'>
                            <img
                              alt='author'
                              src='media/blog/com_auth.jpg'
                              className='avatar'
                            />
                          </div>
                          <div className='comment_info'>
                            <div className='comment_author_says'>John Doe</div>

                            <div className='meta-wrapper'>
                              <span>March 15, 2022</span>
                            </div>

                            <div className='comment_content'>
                              <p>
                                That arse over tit a load of old tosh pardon you
                                wellies amongst william my good sir grub your
                                bike mate james bond morish a blinding.
                              </p>
                              <Link className='comment-reply-link' to='#'>
                                <i className='ei ei-arrow_back'></i>
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                        <ul className='children'>
                          <li className='comment'>
                            <div className='comment-body'>
                              <div className='comment-avatar'>
                                <img
                                  alt='author'
                                  src='media/blog/com_auth2.jpg'
                                  className='avatar avatar-70'
                                />
                              </div>
                              <div className='comment_info'>
                                <div className='comment_author_says'>
                                  Jonquil Von
                                </div>

                                <div className='meta-wrapper'>
                                  <span>April 25, 2021</span>
                                </div>

                                <div className='comment_content'>
                                  <p>
                                    Lost the plot twit the full monty down the
                                    pub Why off his nut cheers say a blinding
                                    shot happy days bog argy bargy.
                                  </p>
                                  <Link className='comment-reply-link' to='#'>
                                    <i className='ei ei-arrow_back'></i>
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li
                        className='comment even thread-odd thread-alt depth-1'
                        id='li-comment-4'
                      >
                        <div id='comment-4' className='comment-body'>
                          <div className='comment-avatar'>
                            <img
                              alt='author'
                              src='media/blog/com_auth3.jpg'
                              className='avatar'
                            />
                          </div>
                          <div className='comment_info'>
                            <div className='comment_author_says'>
                              Lance Bogrol
                            </div>

                            <div className='meta-wrapper'>
                              <span>April 25, 2021</span>
                            </div>

                            <div className='comment_content'>
                              <p>
                                Jeffrey arse lost the plot faff about posh do
                                one that codswallop you.
                              </p>
                              <Link className='comment-reply-link' to='#'>
                                <i className='ei ei-arrow_back'></i>Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className='comment-wrapper'>
                    <div id='respond' className='comment-respond'>
                      <h3 id='reply-title' className='comment-reply-title'>
                        Leave a Reply
                      </h3>
                      <form
                        action='#'
                        method='post'
                        id='commentform'
                        className='comment-form'
                      >
                        <div className='comment-form-author'>
                          <label
                            htmlFor='author'
                            className='label-name'
                          ></label>
                          <input
                            type='text'
                            placeholder='Name *'
                            title='Name *'
                            id='author'
                            name='author'
                            className='form_field'
                          />
                        </div>
                        <div className='comment-form-email'>
                          <label
                            htmlFor='email'
                            className='label-email'
                          ></label>
                          <input
                            type='text'
                            placeholder='Email *'
                            title='Email *'
                            id='email'
                            name='email'
                            className='form_field'
                          />
                        </div>

                        <div className='comment-form-comment'>
                          <label
                            htmlFor='comment'
                            className='label-message'
                          ></label>
                          <textarea
                            name='comment'
                            cols='45'
                            rows='5'
                            placeholder='Your Comment'
                            id='comment'
                            className='form_field'
                          ></textarea>
                        </div>
                        <p className='comment-form-cookies-consent'>
                          <input
                            id='wp-comment-cookies-consent'
                            name='wp-comment-cookies-consent'
                            type='checkbox'
                            value='yes'
                          />
                          <label htmlFor='wp-comment-cookies-consent'>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </p>
                        <p className='form-submit'>
                          <input
                            name='submit'
                            type='submit'
                            id='submit'
                            className='submit'
                            value='Post Comment'
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4'>
                <div className='sidebar'>
                  <div className='widget'>
                    <form
                      role='search'
                      method='get'
                      action='#'
                      className='search-form'
                    >
                      <input
                        type='text'
                        className='search-field'
                        placeholder='Search …'
                        name='s'
                      />
                      <button type='submit' className='search-submit'>
                        <i className='feather-search'></i>
                      </button>
                    </form>
                  </div>

                  <div className='widget ultraland_widget ultraland-recent-posts'>
                    <h3 className='widget-title'>Recent Post</h3>
                    <div className='widget-post ultraland-widget-recent-posts'>
                      <div className='recent-posts-image_wrapper'>
                        <img src='media/blog/recent1.jpg' alt='Rercent Post' />
                      </div>

                      <div className='recent-posts-content_wrapper'>
                        <h4 className='post-title'>
                          <Link to='/blog-single'>
                            Create wonderful website with beautiful page.
                          </Link>
                        </h4>
                        <div className='date'>
                          <span className='posted-on'>
                            <Link to='#' rel='bookmark'>
                              14 January, 2022
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='widget-post ultraland-widget-recent-posts'>
                      <div className='recent-posts-image_wrapper'>
                        <img src='media/blog/recent2.jpg' alt='Rercent Post' />
                      </div>

                      <div className='recent-posts-content_wrapper'>
                        <h4 className='post-title'>
                          <Link to='/blog-single'>
                            How to scale Facebook ads the right way
                          </Link>
                        </h4>
                        <div className='date'>
                          <span className='posted-on'>
                            <Link to='#' rel='bookmark'>
                              14 January, 2022
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='widget-post ultraland-widget-recent-posts'>
                      <div className='recent-posts-image_wrapper'>
                        <img src='media/blog/recent3.jpg' alt='Rercent Post' />
                      </div>

                      <div className='recent-posts-content_wrapper'>
                        <h4 className='post-title'>
                          <Link to='/blog-single'>
                            Designers who changed the web with Saas
                          </Link>
                        </h4>
                        <div className='date'>
                          <span className='posted-on'>
                            <Link to='#' rel='bookmark'>
                              14 January, 2022
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='widget ultraland_widget widget_categories'>
                    <h3 className='widget-title'>Categories</h3>
                    <ul className='blog-category'>
                      <li>
                        <Link to='#'>Website </Link>
                      </li>
                      <li>
                        <Link to='#'>App & Saas</Link>
                      </li>
                      <li>
                        <Link to='#'>Why Servly</Link>
                      </li>
                      <li>
                        <Link to='#'>Business</Link>
                      </li>
                      <li>
                        <Link to='#'>UX Design</Link>
                      </li>
                      <li>
                        <Link to='#'>Servly Saas</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='widget ultraland_widget ultraland-tags'>
                    <h3 className='widget-title'>Tags</h3>

                    <ul className='tag-list'>
                      <li>
                        <Link to='#'>App & Saas</Link>
                      </li>
                      <li>
                        <Link to='#'>Software</Link>
                      </li>
                      <li>
                        <Link to='#'>UX/UI</Link>
                      </li>
                      <li>
                        <Link to='#'>Startup</Link>
                      </li>
                      <li>
                        <Link to='#'>WordPress</Link>
                      </li>
                      <li>
                        <Link to='#'>Services</Link>
                      </li>
                      <li>
                        <Link to='#'>Tuotrials</Link>
                      </li>
                      <li>
                        <Link to='#'>Marketing</Link>
                      </li>
                    </ul>
                  </div>

                  <div className='widget ultraland_widget ultraland-add'>
                    <div className='add-image'>
                      <img src='media/blog/add.jpg' alt='blog add' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </div>
    </Layout>
  );
};

export default BlogSingle;
