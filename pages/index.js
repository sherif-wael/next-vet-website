import { useEffect } from "react";
import styled from 'styled-components'
import Layout from "../components/layout";
import notifications from "../notifications"
import { EmptyBox } from "../components/common";


const StyledWrapper = styled.div`
  // padding: 40px 0;
  // max-width: 900px;
  // margin: 0 auto;
`

const StyledHeader = styled.header`
  margin: 0 0 50px 0;
  background-color: #844cff;
  padding: 20px;
  color: #fff;
  h1{
    margin-left: 30px;
  }
`

const StyledNotificationWrapper = styled.div`
  width: min(65ch, 100%);
  margin: 0 auto;
`

const StyledNotification = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border-radius: 5px;
  box-shadow: 0 4px 15px rgb(0, 0, 0, 0.13);
  // border-top: 6px solid #FF023F;
  div{
    margin: 2px 0 8px;
    font-size: 1.5em;
  }
  
  p{
    font-size: 15px;
    line-height: 1.5em;
  }

  time{
    font-size: 13px;
    color: gray;
  }
`


export default function Home() {

  return (
    <Layout>
      <StyledWrapper>
        <StyledHeader>
          <EmptyBox height={120} />
          <h1>Notifications</h1>
        </StyledHeader>
        <StyledNotificationWrapper>
          {
            notifications.map(({title, body, date}, i) => (
              <StyledNotification>
                <time>{date}</time>
                <div className="font-round">{title}</div>
                <p dangerouslySetInnerHTML={{__html: body}}></p>
              </StyledNotification>
            ))
          }
        </StyledNotificationWrapper>
      </StyledWrapper>
    </Layout>
  )
}

