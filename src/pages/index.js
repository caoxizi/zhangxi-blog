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
              <a href="#top">Yan Pang</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#interest">Research Interests</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#news">News</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#educations">Educations</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#publications">Publications</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#teaching">Teaching Experiences</a>
            </div>
          </div>
        </div>
      </div>
      <div id="top"></div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16 md:pt-28">
          <div className="flex flex-row flex-wrap">
            <div>
              <img className="w-full md:w-60" src="https://pbs.twimg.com/media/FH6H1i4UUAEyhAN?format=jpg&name=medium"></img>
            </div>
            <div className="flex-1 ml-3 mt-3 md:mt-0">
              <p className="font-semibold text-sm" >
                A Chinese pianist, Xi Zhang, is currently pursuing an DMA in Collaborative Piano at the University of Colorado Boulder studying with Dr. Margaret McDonald and Dr. Alexandra Nguyen.  She holds a MM in Collaborative Piano at CUB and a MM in Piano Performance at the University of Wyoming. She received her bachelor’s degree in Piano Performance from the China Conservatory in Beijing, China. In 2011, she was awarded the Second Prize scholarships for excellent study from China Conservatory of Music. After one year, she won the Third Prize in the Eighth International Piano Competition "Young Virtuosos" (Group IV, up to 23 years old) in Bulgaria and performed at the award concert. In 2015, she won the Second Prize, MTNA State competition in Wyoming.
              </p>
              <p className="mt-3">
              Ms. Zhang enjoys playing music in duos and in chamber music. She was fortunate to perform with guest artists and faculties during her study at Wyoming, including playing on the Double Reed Day with guest oboist Ian Wisekal (Faculty at Lamont School of Music) and in a Chamber Music Recital with the guest violinist Holly Mulcahy (Concertmaster of the Chattanooga Symphony & Opera) and Dr. Scott Meredith (Associate Professor at the University of Wyoming.) The past summers Xi participated in “Musica Mundi Chamber Music Festival” in Belgium, the Killington Music Festival in the United States, and the Aspen Music Festival and School. She has worked individually and in masterclasses with esteemed artists including Jean Barr, Rita Sloan, Warren Jones, Andrew Harley, Libby Larsen, and others.
                </p>
              <div className="mt-3 text-xs text-gray-600">
                <div><span className="font-bold">Address:</span> 1020 18th St, Boulder, CO 80302 | <span className="font-bold">Email:</span> xizhangpiano@gmail.com | pang.yan@moffett.ai</div>
              </div>
            </div>
          </div>

          {/* <div className="mt-5 text-xs text-gray-600">
            <div> 949 Sherwood Ave, Suite 200, Los Altos, CA 94022</div>
            <div>Email: yanpangee@gmail.com | pang.yan@moffett.ai</div>
          </div> */}

          <div id="interests" className="mt-12">
            <div className="text-blue-800 text-xl font-bold">Research Interests</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision. Specifically, I focus on </p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Graph Neural Networks</li>
                <li>Object Detection</li>
                <li>Key Points Detection</li>
                <li>Multimodal Learning</li>
                <li>Knowledge Distillation</li>
                <li>Photography</li>
                {/* <li>
                  <a className="text-blue-600 text-sm" href="https://www.instagram.com/pypancho/" target="_blank">Photography</a>
                </li> */}
              </ul>
            </div>
          </div>

          <div id="news">
            <div className="text-blue-800 text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Jan 20, 2022] <b>NEW:</b> Submitted two papers to ICML 2022.</li>
                <li>[Dec 18, 2021] Received my Ph.D. degree.</li>
                <li>[Aug 01, 2021] One paper published to Journal of Geophysical Research Letters. </li>
                <li>[Apr 12, 2021] Joined Moffett AI, Los Altos, CA.</li>
                <li>[Nov 01, 2020] One paper published to Journal of Computers and Electronics in Agriculture. </li>
                <li>[Mar 01, 2020] One paper published to Journal of neuroscience method. </li>
                <li>[Apr 24, 2019] One paper accepted to Science and Information Conference</li>
              </ul>
            </div>
          </div>

          <div id="educations">
            <div className="text-blue-800 text-xl font-bold">Educations</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2017.08 - 2021.12, University of Colorado, Dept. of Electrical Engineering, Ph.D.</li>
                <li>2015.08 - 2017.05, University of Wyoming, Dept. of Electrical and Computer Engineering, Ph.D. Student</li>
                <li>2010.09 - 2013.05, Politecnico di Torino, Dept. of Electrical Engineering, Master</li>
                <li>2005.09 - 2009.05, Henan Polytechnic University, Dept. of Automation, Bachelor</li>
              </ul>
            </div>
          </div>



          <div id="medias">
            <div className="text-blue-800 text-xl font-bold">Online Videos</div>
            <div className="w-full" dangerouslySetInnerHTML={{ __html: '<iframe src="//player.bilibili.com/player.html?aid=764426674&bvid=BV1Vr4y1Q7Ao&cid=448659709&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'}} />
          </div>


          <div id="teaching">
            <div className="text-blue-800 text-xl font-bold">Teaching Experiences</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2020.01 - Present, JulyEdu, couses include advanced course of computer vision, graph neural networks, object detection, human pose estimation, object tracking, SLAM, C++, et al.</li>
                <li>2018.08 - 2021.05, Metropolitan State University of Denver, EET/CPE 2350 Advanced Technical Programming, EET/CPE 3330 Digital Circuits/Systems II，EET/CPE 4020 Digital Circuits/Systems III, CPE 4600 VLSI Circuits and Systems.</li>
                <li>2018.08 - 2021.05, University of Colorado Denver, ELEC 4561 Hardware and Software Interface, ELEC 2531 Logic Lab.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2022 Yan Pang. All rights reserved</div>
          <div>(Last update: Jan 20, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
