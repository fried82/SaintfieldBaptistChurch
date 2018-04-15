import React from 'react';
import $ from 'jquery';

class HistorySection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed:this.getCollapsed(),
      useShowMoreFunctionality:this.getCollapsed()
    }
  }

  getCollapsed = () => {
    return ($(window).width() < 992)
  }

  toggleReadMore = (event) => {
    this.setState({
      collapsed:this.state.collapsed ? false : true
    })
  }

  render() {

    const buttonContents = this.state.collapsed ? "Show More" : "Show Less";
    let readButton;

    if(this.state.useShowMoreFunctionality) {
      readButton = (
        <button className="btn btn-link history-section-button history-section-button-bold" onClick={this.toggleReadMore}>{buttonContents}</button>
      )
    }

    let extraContents;

    if(!this.state.collapsed) {
      extraContents = (
        <div>
          <p>As a follow up to the mission, meetings for Bible study and prayer were organised every Thursday night in the Billy and Dorothy Lawther's house. On most nights a group of about 20 met and heard Pastor Jim Henry speak on “The Greatness of Jesus” while the prayer theme again was the work in Saintfield. On the 27 August, Pastor Derek Baxter and Pastor Jim Smyth attended the meeting to discuss the future of the work in Saintfield. Discussion took place on this topic after the prayer time and it was then agreed by the Lawther and Reid families to take the step of faith and form a Baptist fellowship. Wilfred Reid and William Lawther agreed to work as treasurer and secretary respectively.</p>

          <p>The first meeting of the Saintfield Baptist Fellowship was held on Sunday 6 September 1987 at 7pm in the local Orange Hall and was taken by Pastor Jim Smyth. Stanley Black led the meeting and Andrea and Paula Shanks sang. Fifty eight people attended the service and this was a great encouragement to all concerned with the work. The fellowship was given a set of ‘Redemption’ hymn books by Millisle Baptist Church and everyone was delighted with this gift as it was the first item that actually belonged to Saintfield Baptist Fellowship.</p>

          <p>On Wednesday 9 September 1987 the fellowship held the first Bible Study and Prayer meeting at 8pm in the Orange Hall. Eighteen people attended this meeting which was taken by Pastor Derek Baxter who began a series on “Problems on the Christian Pathway” and dealt that week with the subject of “Doubt”.</p>

          <p>The work took another step forward on Wednesday 7 October 1987 at a meeting held after the prayer meeting. On that night Sam Dunn and David Kennedy indicated that they and their wives were committing themselves to the fellowship and about fifteen other people attended the meeting and showed a keen interest in the work. Pastor Baxter told them that Pastor Grant would be coming to visit the fellowship and would be bringing with him a cheque for £10000 towards purchasing a site. This money was a gift from the Southern Baptist Convention Foreign Mission Board and was sent by Dr Isam Ballenger. Everyone who was at the meeting that night felt a deeper assurance that the Lord was leading and guiding, not only by the financial support but also by those extra families who had committed themselves, and others who had expressed an interest in joining the fellowship.</p>

          <p>The first youth fellowship meeting took place after the Sunday evening service in the Orange Hall on the 11 October. Stanley Black led the meeting to which 13 young people attended. After some light refreshments they all joined in chorus singing which was followed by the showing of a video entitled “Consider it all Joy” and after some discussion it was agreed to continue with these meetings each fortnight.</p>

          <p>As all meetings continued to be well attended and more families had joined the fellowship it was decided to have a morning meeting also on Sunday. The first Sunday morning service was arranged for the 8 November but it was also decided to have a praise service to thank God for all that he had done for the fellowship. This was held on Friday 6 November at 8pm in the Orange Hall and over one hundred and forty people attended. Pastor Derek Baxter brought the message, while Pastor Jim Henry acted as chairman. Sandra Harpur, Ken Maxwell, Daybreak, Redemption Male Quartet and Stephen Corry all took part in the service praising God.</p>

          <p>The first Sunday morning service was attended by over forty people and Pastor Henry was responsible for both services that day. The fellowship met round the Lord’s Table for the first time together, and used trays and plates supplied to them by the new Moira Church.</p>

          <p>On Wednesday 2 December 1987 and 16 December, meetings were held after the time of prayer to decide on a date to form a church and to draw up a constitution. Pastor Baxter chaired the meetings and guided and advised the Fellowship on forming a church while help was also given by the rest of the Baptist Mission teamand to draw up a constitution. It was agreed by all to have the formation of the new church on Saturday 9 January at 7:30pm in the Orange Hall where Pastor Baxter would act as chairman and Pastor Henry would be the speaker. 25 people stated that they wished to become members of the Saintfield Baptist Church (16 who were members of other Baptist churches, 6 who were baptised but not members of a Baptist church and 3 who were not baptised; The 3 people desiring to be baptised were baptised in Comber Baptist Church at the Watchnight Service where Pastor Baxter baptised them and Pastor Garett was the speaker).</p>

          <p>Following a preliminary approach by Baptist Missions to Reginald McClenaghan about buying some of his land for a site for a new church David Kennedy, Sam Dunn and Billy Lawther made a second approach on Wednesday 30 December and after a short time it became very clear to the 3 men that the hand of God was at work when McClenaghan and his wife indicated that they wanted the fellowship to buy the land. A verbal agreement was reached and when Kennedy closed in prayer all were conscious of the Lord’s presence. The news of this was received by other members of the Fellowship with much joy and thanksgiving to God.</p>
        </div>
      )
    }

    return (
      <div>
        <h2>HISTORY</h2>
        <p>During the summer 1987 Baptist Missions sent a team of workers into Saintfield to engage in evangelism with a view to planting a new Association of Baptist Churches in Ireland church. A team of Cecil Johnstone, Stanley Black, Evan Williams, Desmond Creelman, Alan Wilson and Sam Best, with Pastor Jim Henry as leader. The door to door visitation was well received in most homes during the first few weeks and at this time the Baptist Mission team decided to call a meeting of all the people in the area who were interested in the formation of a Baptist church. On 4 June 1987 after notifying all the local Association of Baptist Churches in Ireland churches a meeting was held in Wilfred and Margaret Reid's house to discuss the possibility of establishing a Baptist church in Saintfield and to find out how many local Baptists were interested in the work. Pastor Derek Baxter spoke on the ‘Power of God’ after which those gathered had a time of prayer concentrating on the work in the Saintfield area.</p>

        <p>The Baptist Mission team continued with their visitation in the town and for two weeks from 26 July to 8 August a mission was held in a tent on Listooder Road, in a field granted by Robert McBriar. Pastor Jim Henry was the speaker at the Gospel meetings while Pastor Jim Garrett took the Children’s Meetings each afternoon during the mission. Many people from local churches also helped in the mission by playing the organ, testifying and singing. The meetings were well attended and at the end of the mission five people were known to become Christians and one backslider was restored.</p>

        {extraContents}


        <div className="float-left">
            {readButton}
        </div>
        <div className="float-right">
            <a className="btn btn-link history-section-button" href="https://en.wikipedia.org/wiki/Saintfield_Baptist_Church" target="_blank" rel="noopener noreferrer">Source: Wikipedia</a>
        </div>

      </div>
    )
  }

}

export default HistorySection;