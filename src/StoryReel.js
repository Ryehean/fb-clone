import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story 
            image="https://i.pinimg.com/originals/b5/05/f6/b505f6ba8cedb7a1d6538fae1b158cee.jpg"
            profileSrc="https://scontent.fdet1-2.fna.fbcdn.net/v/t31.18172-8/18556596_1389080194492810_1727505432418564527_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7_TP8drUVy4AX-IEt16&_nc_ht=scontent.fdet1-2.fna&oh=00_AT9NJjpj9TSJYCvw1OBVfB7_oo4vEtATklC1QI5ci4IhIA&oe=62B5BA99"
            title="Ryehean Jones"
        />
        <Story 
            image="https://imageio.forbes.com/specials-images/imageserve/5fc920e66523faf2a548533e/0x0.jpg?format=jpg&crop=3176,1802,x320,y61,safe&width=1200" 
            profileSrc="https://substackcdn.com/image/fetch/h_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg"
            title="Dwayne Johnson"
        />
        <Story 
            image="https://www.gannett-cdn.com/presto/2022/05/19/USAT/4de43d79-ddca-491a-a27b-7e7fe9201568-2022-05-18_Steph_Curry.jpg?crop=3712,2367,x451,y52" 
            profileSrc="https://www.stylerave.com/wp-content/uploads/2020/11/Michael-B-Jordan-workout-sexiest-man-alive-2020.png"
            title="Marcus Jordan"
        />
        <Story 
            image="https://media.wired.com/photos/5f75cdbbb5fbbbb0ed6d44b3/master/pass/Culture_NBAFinals_1228816794.jpg" 
            profileSrc="https://images.indianexpress.com/2021/07/idris-elba-heimdall-1200.jpg"
            title="Richard Williams"
        />
        <Story 
            image="https://wallpaperaccess.com/full/46389.jpg" 
            profileSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67d0c57c-62d2-4a74-b80a-0b5d587f4615/dexvphy-5135e5f1-f563-4dc7-955f-02a39debba23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3ZDBjNTdjLTYyZDItNGE3NC1iODBhLTBiNWQ1ODdmNDYxNVwvZGV4dnBoeS01MTM1ZTVmMS1mNTYzLTRkYzctOTU1Zi0wMmEzOWRlYmJhMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YjWQdK30LHLHnj7y33CBDh82iTiLQUWpZmDB26lPjqM"
            title="Big Ham"
        />

    </div>
  )
}

export default StoryReel