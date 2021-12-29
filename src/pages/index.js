import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    author: "Yan Pang, Chao Liu",
    title: "Efficient-Dyn: Dynamic Graph Representation Learning via Event-based Temporal Sparse Attention Network",
    jounal: "International Conference on Machine Learning",
    paper: "",
    img: "",
    abstract: "Static graph neural networks have been widely used in modeling and representation learning of graph structure data. However, many real-world problems, such as social networks, financial transactions, recommendation systems, etc., are dynamic, that is, nodes and edges are added or deleted over time. Therefore, in recent years, dynamic graph neural networks have received more and more attention from researchers. In this work, we propose a novel dynamic graph neural network, Efficient-Dyn. It adaptively encodes temporal information into a sequence of patches with an equal amount of temporal-topological structure. Therefore, while avoiding the use of snapshots to cause information loss, it also achieves a finer time granularity, which is close to what continuous networks could provide. In addition, we also designed a lightweight module, Sparse Temporal Transformer, to compute node representations through both structural neighborhoods and temporal dynamics. Since the fully-connected attention conjunction is simplified, the computation cost is far lower than the current state-of-the-arts. Link prediction experiments are conducted on both continuous and discrete graph datasets. Through comparing with several state-of-the-art graph embedding baselines, the experimental results demonstrate that Efficient-Dyn has a faster inference speed while having competitive performance.",
   },
   {
    author: "Yan Pang, Chao Liu",
    title: "Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification",
    jounal: "International Conference on Machine Learning",
    paper: "",
    img: "",
    abstract: "Graph neural networks can be effectively applied to find solutions for many real-world problems across widely diverse fields. The success of graph neural networks is linked to the message-passing mechanism on the graph, however the message-aggregating behavior is still not entirely clear in most algorithms. To improve functionality, we propose a new transparent network called Graph Decipher to investigate the message-passing mechanism by prioritizing in two main components: the graph structure and node attributes, at the graph, feature, and global levels on a graph under the node classification task. However the computation burden now becomes the most significant issue because the relevance of both graph structure and node attributes are computed on a graph. In order to solve this issue, only relevant representative node attributes are extracted by graph feature filters, allowing calculations to be performed in a category-oriented manner. Experiments on seven datasets show that Graph Decipher achieves state-of-the-art performance while imposing a substantially lower computation burden under the node classification task. Additionally, since our algorithm has the ability to explore the representative node attributes by category, it is utilized to alleviate the imbalanced node classification problem on multi-class graph datasets.",
   },
  {
    author: "Vijay Harid, Chao Liu, Yan Pang, Akimun Jannat Alvina, Mark Golkowski, Poorya Hosseini, Morris Cohen",
    title: "Automated Large‐Scale Extraction of Whistlers Using Mask‐Scoring Regional Convolutional Neural Network",
    jounal: "Geophysical Research Letters",
    paper: "https://doi.org/10.1029/2021GL093819",
    img: "https://agupubs.onlinelibrary.wiley.com/cms/asset/515d4c0d-3b76-4c45-8e6f-8d3e5639b394/grl62811-fig-0001-m.jpg",
    abstract: "Extremely and very low frequency (ELF/VLF) radio waves are generated from a variety of natural geophysical sources. Ground-based observations often contain signals of interest; however, the signals are typically immersed in a noisy environment due to lightning-generated sferics and additional anthropogenic sources. Although automated detection algorithms have been employed successfully in the past, extraction of arbitrary and broadband signal classes has been a challenge. In this work, we employ a mask-scoring regional convolutional neural network (MSRCNN) for automated extraction of whistlers from ground measurements at Palmer station, Antarctica. Statistics of several hundred thousand whistler receptions are evaluated to determine seasonal and diurnal variations at Palmer station along with strong correlations to lightning activity in the conjugate hemisphere. Although MSRCNN has been employed for whistler extraction in this work, the method has can be easily extended to other signal classes including chorus, hiss, and VLF triggered emissions.",
  },
  {
    author: "Yan Pang, Yeyin Shi, Shancheng Gao, Feng Jiang, Arun-Narenthiran Veeranampalayam-Sivakumar, Laura Thompson, Joe Luck, Chao Liu",
    title: "Improved crop row detection with deep neural network for early-season maize stand count in UAV imagery",
    jounal: "Computers and Electronics in Agriculture",
    paper: "https://doi.org/10.1016/j.compag.2020.105766",
    img: "https://ars.els-cdn.com/content/image/1-s2.0-S0168169920311376-gr1.jpg",
    abstract: "Stand counts is one of the most common ways farmers assess plant growth conditions and management practices throughout the season. The conventional method for early-season stand count is through manual inspection, which is time-consuming, laborious, and spatially limited in scope. In recent years, Unmanned Aerial Vehicles (UAV) based remote sensing has been widely used in agriculture to provide low-altitude, high spatial resolution imagery to assist decision making. In this project, we designed a system that uses geometric descriptor information with deep neural networks to determine early-season maize stands from relatively low spatial resolution (10 to 25 mm) aerial data, which covers a relatively large area (10 to 25 hectares). Instead of detecting individual crops in a row, we process the entire row at one time, which significantly reduces the requirements for the clarity of the crops. Besides, our new MaxArea Mask Scoring RCNN algorithm could segment crop-rows out in each patch image, regardless of the terrain conditions. The robustness of our scheme was tested on data collected at two different fields in different years. The accuracy of the estimated emergence rate reached up to 95.8%. Due to the high processing speed of the system, it has the potential for real-time applications in the future.",
  },
  {
    author: "Yan Pang, Jake Christenson, Feng Jiang, Tim Lei, Remy Rhoades, Drew Kern, John A Thompson, Chao Liu",
    title: "Automatic detection and quantification of hand movements toward development of an objective assessment of tremor and bradykinesia in Parkinson's disease",
    jounal: "Journal of neuroscience methods",
    paper: "https://doi.org/10.1016/j.jneumeth.2019.108576",
    img: "https://ars.els-cdn.com/content/image/1-s2.0-S0165027019304339-gr7.jpg",
    abstract: "Classification of parkinsonian symptoms, including tremor and bradykinesia, require the application of validated clinical rating scales which are inherently subjective. In this study, we assessed an objective measure of parkinsonian symptomology using automated analysis of hand gestures. We constructed and evaluated a hand and finger motion capture apparatus and analysis pipeline that recorded hand/finger motion of control subjects and patients with Parkinson's disease. The detailed three-dimensional (3D) motion features of each finger joint was extracted by using Discrete Wavelet Transform (DWT). The severity of tremor for each finger joint was quantitated by analyzing the motion changes in the frequency domain on four types of motion from five patients and twenty-two control subjects. The proposed approach could distinguish the behavior of patients with Parkinson's disease and control subjects by analyzing the detailed motion features of their hands/fingers. Previously established methods to quantitate finger movement dynamics focus on speed and amplitude. In contrast, our approach measures unsupervised motion features, in real-time, using wavelet analysis, of each individual finger joint during active free movement. The proposed study provides an objective assessment of tremor and bradykinesia in Parkinson's disease. Accordingly, this may help movement disorder clinicians to detect, diagnose and monitor treatment efficacy in Parkinson's disease.",
  },
  {
    author: "Feng Jiang, Yan Pang, ThienNgo N Lee, Chao Liu",
    title: "Automatic object segmentation based on grabcut",
    jounal: "Science and Information Conference",
    paper: "https://doi.org/10.1007/978-3-030-17795-9_25",
    img: "https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-030-17795-9_25/MediaObjects/473237_1_En_25_Fig3_HTML.png",
    abstract: "Object segmentation is used in multiple image processing applications. It is generally difficult to perform the object segmentation fully automatically. Most object segmentation schemes are developed based on prior information, training process, existing annotation, special mechanical settings or the human visual system modeling. We proposed a fully automatic segmentation method not relying on any training/learning process, existing annotation, special settings or the human visual system. The automatic object segmentation is accomplished by an objective object weight detection and modified GrabCut segmentation. The segmentation approach we propose is developed only based on the inherent image features. It is independent with various datasets and could be applied to different scenarios. The segmentation result is illustrated by testing a large dataset."
    },

]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black	h-12 text-white">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-12 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">XXXXXXX XXX</div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#publications">Publications</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">Group</div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16">

          <div className="flex flex-row ">
            <div className="">
              <img className="w-60" src="https://stycj1ftsgu3402131mt29kl-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/C006T000263-Infographic-02-moffett.png"></img>
            </div>
            <div className="flex-1 ml-3 font-semibold text-sm">
              <p>
              I am currently a research associate fellow in Professor Eric Xing's lab as a group research lead. I was a postdoctoral researcher in Professor Marios Savvides's lab at CyLab, CMU, taking charge of ALL research-related projects in the lab (2019-2021). My research interests span machine learning, computer vision, efficient deep learning, etc. Prior to CMU, I was fortunate to be a joint-training Ph.D student (2017-2019) in UIUC/IFP group, advised by Prof. Thomas S. Huang.
              </p>
              <p className="mt-3">
              I am an incoming Research Assistant Professor in the Department of Computer Science and Engineering (CSE) at HKUST, as well as the IAS Junior Fellow from the Institute for Advanced Study of HKUST early 2022.
              </p>
              <p className="text-red-600">
              Please send me your CV if you are interested in working with me at HKUST (I plan to take a few visiting students with good research experience and background for collaborations remotely). <p className="underline">Please also refrain from emailing me (unless you're really interested in my research topics), too many inquiries will make me hard to reply to all of them.</p>
              </p>
              <p className="mt-2 text-gray-400">Department of Electrical and Computer Engineering, Carnegie Mellon University</p>
            </div>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <div>5000 Forbes Avenue, Pittsburgh, PA, 15213</div>
            <div>Email: zhiqiangshen0214 AT gmail.com | zhiqians AT andrew.cmu.edu</div>
            <div>shen54 AT illinois.edu | zhiqiangshen13 AT fudan.edu.cn</div>
          </div>

          <div className="mt-12">
            <div className="text-blue-800	text-xl font-bold">Research Interest</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision and language. Specifically, I am interested in deep learning methods for object detection, fine-grained recognition, image/video captioning, domain adaptation, etc. Recently, I focus on</p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-blue-800	text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Dec 13, 2021] New: I will give a talk/lecture on 2d3d.ai invited by Peter Naftaliev to systematically introduce our recent works on Knowledge Distillation. Please join us if you are interested in this topic. More details will be available soon.</li>
                <li>[Dec 1, 2021] Two papers accepted to AAAI 2022.</li>
                <li>[Oct 31, 2021] One paper accepted to NeurIPS 2021, AI for Science workshop, one paper accepted to ICCV 2021, one paper accepted to ACM MM 2021 (Oral), and one paper accepted to TIP 2021.
                </li>
              </ul>
            </div>
          </div>

          <div id="publications">
            <div className="text-blue-800	text-xl font-bold">Recent Publications</div>
            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="http://zhiqiangshen.com/projects/FKD/FKD.png"></img>
                </div>
                <div className="ml-5">
                  <div>Zhiqiang Shen, Eric Xing.</div>
                  <div className="font-bold">A Fast Knowledge Distillation Framework for Visual Recognition</div>
                  <div>Technical report.</div>
                  <div>Project Page  |  Code & Models  |  arXiv Paper</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-blue-800	text-xl font-bold">Academic Activities</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Conference reviewer: ICLR 2022, NeurIPS 2021, ICML 2021, CVPR 2021, AAAI 2021, WACV 2021, NeurIPS 2020, ECCV 2020, BMVC 2020, IJCAI 2020, CVPR 2020, AAAI 2020, ICCV 2019, CVPR 2019, AAAI 2019, CVPR 2018, ACCV 2018, NIPS 2016.</li>
                <li>Journal reviewer: TPAMI, IJCV, TIP, TMM, JVCI, etc.</li>
              </ul>
            </div>
          </div> 

          <div>
            <div className="text-blue-800	text-xl font-bold">Awards and Honors</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>CVPR 2019 Doctoral Consortium travel award. Mentor: Prof. Trevor Darrell.</li>
                <li>ICLR 2019 travel award, 2019</li>
                <li>AAAI 2019 student scholarship award, 2018</li>
              </ul>
            </div>
          </div> 

          <div>
            <div className="text-blue-800	text-xl font-bold">Competitions</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>MSR-VTT Challenge (video captioning): ranked 4th in human evaluation and ranked 5th in the automatic evaluation metrics (Team leader), 2016</li>
                <li>Top 10% in Kaggle Competition of Right Whale Recognition, 2016</li>
                <li>Second Prize in DataCastle Competition of the Verification Code Recognition, 2016</li>
              </ul>
            </div>
          </div> 

          <div>
            <div className="text-blue-800	text-xl font-bold">Teaching Assistant</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2015.9- 2016.1, Fudan University, COMP120008.02, C++ language programming</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2021 Zhiqiang Shen. All rights reserved</div>
          <div>(Last update: May 9, 2021.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage