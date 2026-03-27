// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          content: "Kiri Choi | Principal Investigator        Kiri Choi is an Assistant Professor of the Department of Biological Sciences at Keimyung University. His research focuses on the intersection of biological structure and dynamic function, spanning from biochemical networks to brain circuits. Before joining Keimyung University, he was awarded Swartz Foundation Fellowship for Theoretical Neuroscience to investigate olfactory coding and odor-guided navigation under the supervision of Thierry Emonet at Yale University. He served as a Research Fellow at KIAS (Korea Institute for Advanced Study) under the supervision of Changbong Hyeon, studying the structural and connective features of the Drosophila olfactory system. He received his Ph.D. in Bioengineering from the University of Washington under the advice of Herbert Sauro, where he worked on the fundamental principle of biochemical reaction networks models. He received his BS in Physics (Biophysics) from the same university.            ✉️Email|            Google Scholar   |           GitHub   |       ResearchGate   |           X/twitter   |      ORCID    Dongheon Lee | Undergraduate Student        Dongheon Lee is an undergraduate researcher in the Department of Life Sciences at Keimyung University. He joined the lab to pursue his interest in neuroscience, specializing in experimental biology using Drosophila models. He is dedicated to mastering practical laboratory skills. His personal interests include growing plants, fishing, and photography.      Gyumin Lee | Undergraduate Student        Gyumin Lee is an undergraduate researcher in the Department of Life Sciences at Keimyung University, where she is pursuing a degree in Computer Science. Driven by her interest in Bio-AI, she joined Professor Kiri Choi’s laboratory to explore the intersection of computing and biology. She is currently focusing on AI-driven research automation to innovate laboratory processes. In her free time, she listens to music to recharge and recover from her academic projects.      Hyunmin Ju   | Undergraduate Student        Hyunmin Ju is an undergraduate researcher in the Department of Life Sciences at Keimyung University. He is passionate about uncovering the fundamental mechanisms of life, with a specific focus on cancer research using Drosophila as a model system. Outside of the lab, he recharges by listening to music, watching movies, and playing RPGs.      Junwoo Shin  | Undergraduate Student        Junwoo Shin is an undergraduate researcher at Keimyung University, majoring in Mathematics with a minor in Chemistry. Since joining the laboratory in January 2026, he has been studying Compressed Sensing and image reconstruction algorithms under the supervision of Professor Kiri Choi. His academic interests also include Graph Theory. He is a big supporter of Daegu FC and enjoys playing sports, watching games, and taking photographs with his Minolta X-300 film camera.      Jieun Min   | Undergraduate Student        Ji-eun Min is a student in the Department of Biological Sciences at Keimyung University, currently learning research under Professor Kiri Choi. She is interested in combining molecular biology and computational biology to analyze biological phenomena at the molecular level. In her free time, she enjoys listening to music.      Hojeong Shin   | Undergraduate Student        HoJeong Shin is an undergraduate researcher in the Department of Biological Science at Keimyung University. Her research interests lie at the intersection of biology and technology, specifically in AI-driven analysis and computational biology. She aims to bridge the gap between biological theory and computational application. In her free time, she stays consistent with her fitness routine.      Hyosang Bae   | Undergraduate Student        Hyosang Bae is an undergraduate researcher and a junior in the Department of Life Sciences at Keimyung University. His research interest lies in experimental biology using Drosophila as a model system, which led him to join the laboratory. Beyond his academic pursuits, he enjoys watching documentaries, gaming, and reading novels. He is currently focusing on gaining hands-on experience in biological experiments and understanding the fundamental mechanisms of life sciences      Seoyoung Kim   | Undergraduate Student        Seoyoung Kim is an undergraduate student in the Department of Life Sciences at Keimyung University. She is particularly interested in neuroscience and bioinformatics, focusing on understanding how biological systems process and analyze information. In her free time, she enjoys relaxing and recharging to maintain a balanced academic life.      Jinseok Byeon   | Undergraduate Student        Jinseok Byun is an undergraduate researcher in the Department of Life Science at Keimyung University, where he is also pursuing a degree in Statistics. His research interests lie at the intersection of Neuroscience and AI, with a particular focus on Olfactory AI. Driven by his core vision of becoming a &#39;Heart Toucher,&#39; he aspires to be a researcher who heals the human body through advanced technology and the human soul through poetry. Outside of his academic pursuits, he finds true happiness in writing poetry:memo: and starting his day with a morning run  :runner:      🚀Join UsWe are looking for students with backgrounds in Biology, Physics, Computer Science, Mathematics, Statistics, or Engineering! If you are interested in AI, olfaction, neuroscience, biochemical reaction networks, dynamical systems, or fruit flies 🪰, we want to hear from you.You do not need a background in Biology, but you must be curious about how biological systems work.Please email kirichoi(at)kmu.ac.kr with your CV and a brief statement of interest (1 paragraph).            Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © 2026 Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "research",
          description: "",
          content: "Our lab combines neuroscience, biophysics, and systems biology to understand how biological systems process information and maintain robust function. We are particularly interested in the intersection of structural connectivity and dynamic function.              Dynamics of Chemosensory Receptors    What is the principle of chemical sensing?    We investigate how sensory information is encoded at the molecular interface. Our research focuses on the dynamics of ligand-receptor binding to understand how olfactory neurons encode fluctuating odor signals. We analyze how the binding kinetics of olfactory receptors constrain the system&#39;s ability to encode context-dependent information. By modeling these initial interactions, we aim to determine the fundamental limits of sensory encoding and how these constraints shape downstream neural processing.        Olfactory Perception &amp;amp; Decision-Making 🪰👃    What forms our perception of a smell?    Navigation is an active process shaped by odor value and context. We investigate the algorithms that allow Drosophila to make informed decisions in complex environments.By integrating quantitative behavioral experiments with Artificial Intelligence, we model how the brain integrates various navigational cues to guide movement. We are particularly interested in how the brain updates the &quot;value&quot; of an odor based on changing environmental contexts to drive decision-making.                        Information Processing in Biological Systems    What makes biological networks robust?    We use the olfactory system as a model to uncover universal principles of biological computation. Our goal is to understand how the structure of a network determines its function across different biological systems—from the large-scale connectomics of neural circuits to biochemical signaling pathways. We investigate the relationship between connectivity and neural dynamics, seeking to identify the topological motifs that ensure robust information processing and function.         Biological Algorithm Development    Software as a scientific output.    Biological processes are complex and demand advanced software tools. We develop novel computational methods to interpret high-dimensional biological data, focusing on network inference, optimization, and clustering. Our research addresses the challenge of recovering underlying system structures from sparse experimental data. Additionally, we focus on enhancing model reuse and reproducibility in biological modeling through the development of industry-standard simulation tools.                      Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © 2026 Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          content: "*indicates equal contribution2024  Bifurcation Enhances Temporal Information Encoding in the Olfactory PeripheryK. Choi, W. Rosenbluth**, I.R. Graf, N. Kadakia, T. EmonetPRX Life. 2, 043011 (2024)10.1103/PRXLife.2.043011  Unveiling the Odor Representation in the Inner Brain of Drosophila through Compressed SensingK. Choi, W.K. Kim, C. HyeonPhysical Review Research. 6 (2), 023298 (2024)10.1103/PhysRevResearch.6.0232982023  General Chemical Reaction Network Theory for GPCR-Based Olfactory Sensing: Elucidation of Odorant Mixture Effects and Agonist–Synergist ThresholdW.K. Kim, K. Choi, C. Hyeon, S.J. JangJ. Phys. Chem. Lett. 14 (XXX), 8412–8420 (2023)10.1021/acs.jpclett.3c02310  libRoadRunner 2.0: A High-Performance SBML Simulation and Analysis LibraryC. Welsh, J. Xu, L. Smith, M. König, K. Choi, H.M. SauroBioinformatics. 39(1), btac770 (2023)10.1093/bioinformatics/btac7702022  Polymer physics-based classification of neurons.K. Choi, W.K. Kim, C. HyeonNeuroinformatics. 21(1), 177-193 (2022)10.1007/s12021-022-09605-3  Olfactory responses of Drosophila are encoded in the organization of projection neurons.K. Choi, W.K. Kim, C. HyeoneLife. 11, e77748 (2022)10.7554/eLife.77748  Neural information processing and computations of two-input synapses.S.H. Kim, J.H. Woo, K. Choi, M.Y. Choi, K. HanNeural Computation. 34 (10), 2102–2131 (2022)10.1162/neco_a_01534  BioSimulators: a web-based registry of simulation engines and services for multiscale modelingB. Shaikh, L.P. Smith, D. Vasilescu, G. Marupilla, M. Wilson, E. Agmon, H. Agnew, S.S. Andrews, A. Anwar, M.E. Beber, F.T. Bergmann, D. Brooks, L. Brusch, L. Calzone, K. Choi, …, J.R. KarrNucleic Acids Research. 50 (W1), W108–W114 (2022)10.1093/nar/gkac331  The structural aspects of neural dynamics and information flowJ.H. Woo, K. Choi, S.H. Kim, K. Han, M.Y. ChoiFront Biosci.-Landmark. 27 (1), 15 (2022)10.31083/j.fbl27010152021  Characterization of multiscale logic operations in the neural circuitsJ.H. Woo, K. Choi, S.H. Kim, K. Han, M.Y. ChoiFront Biosci.-Landmark. 26 (10), 723–739 (2021)10.52586/4983  Status and Challenges of Reproducibility in Computational Systems and Synthetic BiologyK. Choi, J.R. Karr, H.M. SauroIn Systems Medicine: Integrative, Qualitative and Computational Approaches. Amsterdam, Netherlands: Elsevier. 3, 406–412 (2021)10.1016/B978-0-12-801238-3.11525-92019  Synthetic Biology Open Language (SBOL) Version 2.3C. Madsen, A.G. Moreno, P. Umesh, Z. Palchick, N. Roehner, C. Atallah, B. Bartley, K. Choi, …, A. WipatJ. Integr. Bioinform. 16 (2) (2019)10.1515/jib-2019-0025  Recent Advances in Biomedical Simulations: A Manifesto for Model EngineeringJ. Hellerstein, S. Gu, K. Choi, H.M. SauroF1000Research. 8 (2019)10.12688/f1000research.15997.12018  pySBOL: A Python Package for Genetic Design Automation and StandardizationB. Bartley, K. Choi, M. Samineni, Z. Zundel, T. Nguyen, C.J. Myers, H.M. SauroACS Synthetic Biology. 8 (7), 1515–151810.1021/acssynbio.8b00336  Robust approaches to generating reliable predictive models in systems biologyK. ChoiIn Systems Biology. Cham, Switzerland: Springer. 301–312 (2018)10.1007/978-3-319-92967-5_15  Tellurium: An Extensible Python-based Modeling Environment for Systems and Synthetic BiologyK. Choi, J.K. Medley, M. König, K. Stocking, L. Smith, S. Gu, H.M. SauroBioSystems. 171, 74–79 (2018)10.1016/j.biosystems.2018.07.006  Tellurium Notebooks - An Environment for Dynamical Model Development, Reproducibility, and ReuseJ.K. Medley, K. Choi, M. König, L. Smith, S. Gu, J. Hellerstein, S.C. Sealfon, H.M. SauroPLOS Comp. Biol. 14 (6), e1006220 (2018)10.1371/journal.pcbi.1006220  A Portable Structural Analysis Library for Reaction NetworksY. Bedaso, F.T. Bergmann, K. Choi, J.K. Medley, H.M. SauroBioSystems. 169–170, 20–25 (2018)10.1016/j.biosystems.2018.05.008  Synthetic Biology Open Language (SBOL) Version 2.2.0R.S. Cox III, C. Madsen, J.A. McLaughlin, T. Nguyen, N. Roehner, B. Bartley, J. Beal, M. Bissell, K. Choi, …, A. WipatJ. Integr. Bioinform. 15 (1), 30–132 (2018)10.1515/jib-2018-00012016  Synthetic Biology Open Language (SBOL) Version 2.1.0J. Beal, R. Cox, R. Grunberg, J. McLaughlin, T. Nguyen, B. Bartley, M. Bissell, K. Choi, …, A. WipatJ. Integr. Bioinform. 13 (3), 291 (2016)10.1515/jib-2016-291  phraSED-ML: A paraphrased, human-readable adaptation of SED-MLK. Choi, L. Smith, J.K. Medley, H.M. SauroJ. Bioinform. Comput. Biol. 14 (6), 1650035 (2016)10.1142/S02197200165003592015  Controlling E. coli Gene Expression NoiseK.H. Kim, K. Choi, B. Bartley, H.M. SauroIEEE Trans. Biomed. Circuits Syst. 9 (4), 497–504 (2015)10.1109/TBCAS.2015.24611352010  Quantitative Mapping of Diffusion Characteristics under the Cortical SurfaceB.-B. Koo, K. Choi, I. Ronen, J.M. Lee, D.S. KimMagn. Reson. Imaging. 28 (8), 1175–1182 (2010)10.1016/j.mri.2010.03.0202009  Development of Gradient Centrifugal Partition Chromatography Method and Its Application for the Isolation of 3,5-Dimethoxyphenanthrene-2,7-diol and Batatasin-I from Dioscorea oppositeK.D. Yoon, M.H. Yang, Y.-W. Chin, Y. Kim, H.R. Kim, K. Choi, …, J.W. KimNatural Product Sciences. 15, 144–150 (2009)10.1093/bioinformatics/btac770            Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © 2026 Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          content: "#### **16164 일반미생물학 General Microbiology**- Spring 2026#### **46546 생물데이터분석 Biological Data Analysis**- Spring 2026#### **24996 산업미생물학 Industrial Microbiology**- Fall 2025#### **19249 환경미생물학 Environmental Microbiology**- Fall 2025#### **A9872  디지털헬스케어개론 Intro to Digital Healthcare**- Fall 2025---            Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © {{ site.time | date: &quot;%Y&quot; }} Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-software",
          title: "software",
          description: "",
          content: "TelluriumAn integrated Python-based environment for model building, simulation, and analysis. It allows researchers to write human-readable models in Antimony and simulate them instantly using the Python scientific stack. It features first-class support for community standards (SBML, SED-ML, COMBINE).To use:pip install tellurium[Github] | [Documentation]      TlibRoadRunnerA high-performance SBML simulation engine that uses LLVM JIT compilation to simulate massive biochemical networks in milliseconds. It supports deterministic (ODE), stochastic (Gillespie), and metabolic control analysis (MCA), and can be deployed as a standalone library for large-scale ensemble modeling.To use:pip install libroadrunner[Github] | [Documentation]    metaMEGA meta-modeling algorithm for biochemical reaction networks. It uses evolutionary algorithms to generate model ensembles from perturbation studies, allowing researchers to explore network topology and parameter space effectively to solve inverse problems.[Github]      phraSED-MLA human-readable simulation setup language. It converts complex, XML-based simulation protocols (SED-ML) into a clean, paraphrased format, allowing users to describe simulation experiments and plotting instructions using simple text.To use:pip install phrasedml[Github]    netplotlibA purely Python-based visualization tool for biochemical reaction networks. Built on NetworkX and Matplotlib, it enables the programmatic generation of publication-quality network diagrams directly from code or model files.To use:pip install netplotlib[Github] | [Documentation]            Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © 2026 Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          content: "K                                                Kiri Choi                                3월 27일 (편집됨)                                      The IN/SBLab website is officially live!                    2026년 3월 27일                                                                            K                                                Kiri Choi                                3월 27일 (편집됨)                                      Open Positions                    2026년 3월 27일                    We are actively recruiting MS/PhD students with backgrounds in Biology, Physics, CS, Statistics, or Bioengineering.                          Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © 2026 Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          content: "Address          Backeun Hall, Room 254-1    Department of Biological Sciences, Keimyung University      1095 Dalgubeol-daero, Dalseo-gu    Daegu 42601, South Korea        백은관 254-1호      계명대학교 생명과학과      대구광역시 달서구 1095 달구벌대로 (우)42601                             Principal InvestigatorKiri ChoiBackeun Hall, Room 252Department of Biological Sciences, Keimyung University1095 Dalgubeol-daero, Dalseo-guDaegu 42601, South Korea백은관 252호계명대학교 생명과학과대구광역시 달서구 1095 달구벌대로 (우)42601✉️ kirichoi(at)kmu.ac.kr☎️ +82 53-580-5537            Department of Biological Sciences |    Keimyung University                      ▶        ⚙️ Site Map                    People        Research        Publications        Teaching        Software        News        Contact                  Join us        © 2026 Kiri Choi.All rights reserved.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-the-in-sblab-website-is-officially-live",
        
          title: "The IN/SBLab website is officially live!",
        
        description: "",
        content: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2026/TheCSBLabWebsiteIsOfficiallyLive/";
          
        },
      },{id: "post-open-positions",
        
          title: "Open Positions",
        
        description: "",
        content: "We are actively recruiting MS/PhD students with backgrounds in Biology, Physics, CS, Statistics, or Bioengineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2026/OpenPositions/";
          
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
