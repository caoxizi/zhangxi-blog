import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black h-12 text-white fixed w-full">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-12 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">
              <a href="#top">Xi Zhang</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#educations">Educations</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#publications">Events</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#work">Work Experiences</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#medias">Medias</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#teaching">Teaching</a>
            </div>
          </div>
        </div>
      </div>
      <div id="top"></div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16 md:pt-28">
          <div className="flex flex-row flex-wrap">
            <div>
              <img className="w-full md:w-60" src="https://pbs.twimg.com/media/FH6ETgSVUAoNzMt?format=jpg&name=4096x4096"></img>
            </div>
            <div className="mt-3" >
                A Chinese pianist, <b>Xi Zhang</b>, is currently pursuing an <b>DMA in Collaborative Piano</b> at the University of Colorado Boulder (UCB) studying with Dr. Margaret McDonald and Dr. Alexandra Nguyen. She holds a MM in Collaborative Piano at UCB and a MM in Piano Performance at the University of Wyoming (UW). She received her bachelor’s degree in Piano Performance from the China Conservatory in Beijing, China. In 2011, she was awarded the Second Prize scholarships for excellent study from China Conservatory of Music. After one year, she won the Third Prize in the Eighth International Piano Competition <b>"Young Virtuosos"</b> (Group IV, up to 23 years old) in Bulgaria and performed at the award concert. In 2015, she won the Second Prize, MTNA State competition in Wyoming.
            </div>
            <div className="mt-3">
              Ms. Zhang enjoys playing music in duos and in chamber music. She was fortunate to perform with guest artists and faculties during her study at Wyoming, including playing on the Double Reed Day with guest oboist Ian Wisekal (Faculty at Lamont School of Music) and in a Chamber Music Recital with the guest violinist Holly Mulcahy (Concertmaster of the Chattanooga Symphony & Opera) and Dr. Scott Meredith (Associate Professor at the University of Wyoming.) The past summers Xi participated in “Musica Mundi Chamber Music Festival” in Belgium, the Killington Music Festival in the United States, and the Aspen Music Festival and School. She has worked individually and in masterclasses with esteemed artists including Jean Barr, Rita Sloan, Warren Jones, Andrew Harley, Libby Larsen, and others.
              </div>
            <div className="mt-3 text-xs text-gray-600">
              <div><span className="font-bold">Address:</span> 1020 18th St, Boulder, CO 80302 | <span className="font-bold">Email:</span> xizhangpiano@gmail.com | pang.yan@moffett.ai</div>
            </div>
          </div>


          <div className="mt-5" id="educations">
            <div className="text-blue-800 text-xl font-bold">Educations</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2019.08 - Present, University of Colorado Boulder, Dept. of Electrical Engineering, Doctoral Student</li>
                <li>2016.08 - 2018.05, University of Wyoming, Dept. of Electrical and Computer Engineering, Master</li>
                <li>2014.08 - 2016.05, University of Wyoming, Dept. of Piano Performance, Master</li>
                <li>2010.09 - 2014.05, China Conservatory of Music, Dept. of Piano Performance, Bachelor</li>
              </ul>
            </div>
          </div>

          <div id="events">
            <div className="text-blue-800 text-xl font-bold">Events</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2021.11 Doctoral degree recital II, Grusin Hall, Imig Music Building, CU Boulder, CO, US</li>
                <li>2021.09 Doctoral degree recital I,  Grusin Hall, Imig Music Building, CU Boulder, CO, US</li>
                <li>2019.06 Aspen Music Festival and School/Collaborative Piano Program, Aspen, Colorado, US</li>
              </ul>
            </div>
          </div>

          <div id="work">
            <div className="text-blue-800 text-xl font-bold">Working Experience</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2017.08 - Present, teaching assistant at University of Colorado Boulder, Boulder, CO, US</li>
                <li>2015.08 - 2017.05, stuff pianist at String Academy of Wyoming, Laramie, WY, US</li>
                <li>2014.08 - 2016.05, teaching assistant at University of Wyoming, Laramie, WY, US</li>
              </ul>
            </div>
          </div>


          <div id="medias">
            <div className="text-blue-800 text-xl font-bold">Online Videos</div>
            <div className="text-sm pl-10 mt-3 py-3">
                <div className="m-auto" style={{width: 560}}>
                    <div  dangerouslySetInnerHTML={{ __html: '<iframe width="560" height="315" src="//player.bilibili.com/player.html?aid=764426674&bvid=BV1Vr4y1Q7Ao&cid=448659709&page=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}} />
                    <div className="font-bold my-5 text-center text-lg">Richard Strauss: Afforderung Op. 27 No. 3</div>
                </div>
                <div className="m-auto" style={{width: 560}}>
                    <div  dangerouslySetInnerHTML={{ __html: '<iframe width="560" height="315" src="//player.bilibili.com/player.html?aid=719454852&bvid=BV1MQ4y1i7NB&cid=448770679&page=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}} />
                    <div className="font-bold my-5 text-center text-lg">Paul Creston: Sonata for Saxophone and Piano, 1st Movement</div>
                </div>
                <div className="m-auto" style={{width: 560}}>
                    <div  dangerouslySetInnerHTML={{ __html: '<iframe width="560" height="315" src="//player.bilibili.com/player.html?aid=634394760&bvid=BV12b4y1q7te&cid=448673004&page=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}} />
                    <div className="font-bold my-5 text-center text-lg">César Franck: A Major Sonata for Violin and Piano</div>
                </div>
                <div className="m-auto" style={{width: 560}}>
                    <div  dangerouslySetInnerHTML={{ __html: '<iframe width="560" height="315" src="//player.bilibili.com/player.html?aid=634394838&bvid=BV12b4y1q74H&cid=448760669&page=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}} />
                    <div className="font-bold my-5 text-center text-lg">Alberto Ginastera: Danzas Argentinas</div>
                </div>
            </div>
          </div>


          <div id="teaching">
            <div className="text-blue-800 text-xl font-bold">Teaching Experiences</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Ms Zhang has nine-year experience of giving private piano lessons to all-age students.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2022 Xi Zhang. All rights reserved</div>
          <div>(Last update: Jan 20, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
