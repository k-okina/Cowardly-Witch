import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import name from '../../images/profile-page/name.svg'
import wishlist from '../../images/profile-page/wishlist.svg'
import job from '../../images/profile-page/job.svg'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page profile-page">
        <div className="page__bg"></div>
        <div className="page__decoration">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="page__frame"></div>
        <div className="page__inner">
          <section className="page__title">
            <div></div>
          </section>
          <section className="page__project"></section>
          <img className="profile-page__icon" src="./images/profile-page/icon.svg" alt="アイコン" />
          <img className="profile-page__name" src={name} alt="yui540" />
          <h2 className="page__sub-title">どんな人物？</h2>
          <p className="page__description">
            魔法少女になるため、プログラミングを学んだが、<br />
            まず少女でないことに気づき、人生が狂う。<br />
            ----そして、現在は<br />
            年齢を考えて魔女になりたいという気持ちと、自分の憶病な性格から<br />
            「憶病な魔女」という属性を手に入れた。<br />
            ※性別は、男です。
          </p>
          <h2 className="page__sub-title">僕の構成要素</h2>
          <section className="profile-page__table">
            <div className="inner">
              <h4>属性</h4><p>憶病な魔女</p>
              <h4>誕生日</h4><p>1996/11/09 21歳</p>
              <h4>特徴</h4><p>心が不安定で頭が悪い</p>
              <h4>好き</h4><p>由比ヶ浜結衣, ミライアカリ, さユり, ClariS</p>
              <h4 className="last">食べ物</h4><p className="last">和菓子, 駄菓子, 肉じゃが</p>
            </div>
            <a className="link-btn" rel="noopener noreferrer" href="http://amzn.asia/3Xubapz" target="_blank">
              <img src={wishlist} alt="ほしい物リスト" />
            </a>
          </section>
          <h2 className="page__sub-title">お仕事のご依頼</h2>
          <section className="profile-page__job">
            <p>
              やっはろー！<br />
              実は個人でもお仕事を受け付けております。<br />
              LP,同人サイト,ポートフォリオサイトなどの<br />
              制作をお手伝いさせていただきます。<br />
              お仕事のご依頼は、Twitterとかで<br />
              DM飛ばしてね♫
            </p>
            <a className="link-btn" rel="noopener noreferrer" href="https://twitter.com/yui540" target="_blank">
              <img src={job} alt="お仕事のご依頼" />
            </a>
          </section>
          <h2 className="page__sub-title">ひとりごと</h2>
          <section className="profile-page__timeline">
            <iframe src="./timeline.html" title="timeline"></iframe>
          </section>
          <section className="page__space"></section>
        </div>
        <Link to="/" className="page__close-btn">
          <div></div><div></div>
        </Link>
      </article>
    )
  }
}
