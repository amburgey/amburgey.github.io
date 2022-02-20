import { Resume } from './types'
import { FaGithub, FaRegEnvelope } from 'react-icons/fa'
import { SiResearchgate } from 'react-icons/si'

const resume: Partial<Resume> = {
  name: 'Dr. Staci M. Amburgey',
  title:
    'Wildlife Biology • Population Ecology • Collaborative Conservation and Management',
  contact: [
    {
      name: 'Email',
      link: 'mailto:staci.m.amburgey@gmail.com',
      icon: <FaRegEnvelope />,
      color: 'is-primary',
    },
    {
      name: 'ResearchGate',
      link: 'https://www.researchgate.net/profile/Staci_Amburgey',
      icon: <SiResearchgate />,
      color: 'is-link',
    },
    {
      name: 'Github',
      link: 'https://github.com/amburgey',
      icon: <FaGithub />,
      color: 'is-info',
    },
  ],
  research: [
    {
      name: 'Optimizing monitoring and management of brown treesnakes',
      purpose:
        'How can we effectively and efficiently make management decisions?',
      researchQuestions: [
        'What are optimal sampling schema to inform management decisions with respect to cost?',
      ],
      summary:
        'In collaboration with the University of Washington, the U.S. Geological Survey, and U.S. Department of Agriculture, I am developing a framework to identify and evaluate monitoring and management scenarios aimed to provide decision making tools to managers on Guam. A variety of monitoring and management methods exist by which to sample and remove invasive brown treesnakes, but we aim to create a framework that allows for optimal suites of methods to be identified with respect to their performance and their cost.',
      image: {
        src: '/img/bts-project.webp',
        caption:
          'Juvenile Brown Tree Snake captured in the field on Guam. Photo credit H. Sipe',
      },
      start: new Date('2019-02-01'),
    },
    {
      name: 'Engineering for wildlife conservation',
      purpose:
        'Can cross disciplinary collaborations create solutions to intractable problems?',
      researchQuestions: [
        'Can we obtain individual identities through the creation of a remote PIT tag reader system?',
      ],
      summary:
        'In collaboration with the University of Washington, U.S. Geological Survey, and [Aadithya Prakash](https://www.linkedin.com/in/aadithya), we developed an Arduino-based RFID scanner for passive integrated transponder (PIT) tags that is more affordable and flexible than consumer-available devices. Our remote PIT tag reader (aka, RePTaR) was trialed on Guam for use in identifying brown treesnake identities at trapping stations to assist with abudance estimation.',
      image: {
        src: '/img/reptar.webp',
        caption:
          'Trapping setup for evaulation of RePTaR prototype. Photo credit S. Amburgey',
      },
      start: new Date('2020-03-01'),
    },
    {
      name: 'Developing methods for estimating brown treesnake density in Guam',
      purpose:
        'How can we collect data to estimate densities of species in a cost effective yet informative way?',
      researchQuestions: [
        'Can we obtain reliable density estimates of unmarked animals using camera trapping photos?',
      ],
      summary:
        'In collaboration with the University of Washington, the U.S. Geological Survey, and U.S. Department of Agriculture, I developed capture-mark-recapture models to estimate the density of invasive brown treesnakes on the island of Guam in order to better understand the effects of removal efforts. Management of this species aims to mitigate the ecological impacts of brown treesnakes on the island’s native avifauna and eventually facilitate the reintroduction of locally extirpated species. I identified modeling approaches that might be used to estimate density of unmarked animals using camera trapping photos at bait stations.',
      image: {
        src: '/img/camera-trap-guam.webp',
        caption: 'Camera trap setup on Guam.',
      },
      start: new Date('2019-02-01'),
    },
    {
      name: 'Wood frog range dynamics',
      purpose:
        'How does the response of breeding of wood frogs to annual variation in weather variables vary across their range?',
      researchQuestions: [
        'Can responses to annual variation in weather be predicted by site location within the broader climate niche occupied by the species?',
        'Is there a single optimum value for climate or is there evidence for local variation in climate responses as evidenced by local optima?',
      ],
      summary:
        'Using egg mass count data for wood frogs (Lithobates sylvaticus) from across their broad range, I investigated how count data and trends in abundance vary in respect to climatic conditions to better understand patterns and variation across the species range. Using dynamic state space models to incorporate annual and regional climate, I tested hypotheses concerning breeding conditions, water availability, and overwintering survival across the range.',
      image: {
        src: '/img/woodfrog.webp',
        caption: 'Wood frog (Lithobates sylvaticus). Photo credit J. Feinberg',
      },
      start: new Date('2014-02-01'),
      end: new Date('2017-02-01'),
    },
    {
      name: 'Shenandoah salamander range boundaries',
      purpose: 'How does interspecific competition help shape species ranges?',
      researchQuestions: [
        'How do interspecific interactions potentially alter species traits and behaviors and structure range limits?',
        'Can divergence or similarities in traits and behaviors help explain patterns in species occurrence?',
      ],
      summary: `Shenandoah salamanders are a range-restricted, federally-listed species, occurring only on the tops of certain mountains in Shenandoah National Park, Virginia. The range boundary of this species is currently not well-defined, and the factors setting these limits need to be better elucidated to assist in conservation efforts. Temperature and humidity likely play a large role in establishing the lower limits of the Shenandoah salamander's range, but competition with another native salamander, the red-back salamander, may also be important.
      
By surveying for both species along the range boundary, I modeled and compared the current distribution of each species along these mountain tops using single and two species occupancy models. In addition, I measured individual physical traits and behavioral use of habitat to understand if and how competitive interactions between these two species influence physical and demographic traits where they overlap.`,
      image: {
        src: '/img/shenandoah-salamander.webp',
        caption:
          'Shenandoah Salamander (Plethodon shenandoah). Photo credit A. Ormiston',
      },
      start: new Date('2014-02-01'),
      end: new Date('2019-02-01'),
    },
    {
      name: 'Southern California Fragmentation and Species Communities',
      purpose:
        'How do small vertebrate communities change in response to fragmentation?',
      researchQuestions: [
        'Does species richness change as fragment sizes change?',
        'How does life history or range position influence a species response to fragmentation?',
        'Can range position or life history traits predict species’ sensitivity to fragmentation at different scales?',
      ],
      summary: `In collaboration with the [Western Ecological Research Station](http://www.werc.usgs.gov/location.aspx?locationid=9), I analyzed species community data using multispecies occupancy models to better understand patterns in species richness. This will allow managers to better understand species richness-fragment size relationships when determining land parcels in which to invest.
      
I also explored the if range position or life history traits can help explain species responses to changes in fragment size. I plan on continuing this work by understanding alpha, beta, and gamma diversity across fragments in the Southern California landscape. This work allows managers to better understand individual species risk to altered landscapes in addition to understanding biotic homogenization in a fragmented landscape.`,
      image: {
        src: '/img/wers.webp',
        caption:
          'California whipsnake (Masticophis lateralis). Photo credit Western Ecological Research Station',
      },
      start: new Date('2014-02-01'),
    },
    {
      name: 'Powell Center - Amphibian Decline Working Group',
      purpose:
        'What trends exist in amphibian occupancy across North America and what factors are responsible?',
      researchQuestions: [
        'What can continental trends in amphibian occupancy tell us about climate factors affecting this group?',
      ],
      summary:
        'I worked under the [John Wesley Powell Center](https://powellcenter.usgs.gov/) as a data technician and then graduate fellow in the [Amphibian Decline working group](https://powellcenter.usgs.gov/view-project/526ae3a2e4b0be4db9fbf976). Collaborators from across the United States, Canada, and Europe were involved in this broad-scale, collaborative project. We were interested in large scale patterns in amphibian occupancy and understanding declines at continental scales using occupancy models. This involved analysis of amphibian monitoring data from long time series and from broad spatial scales. Our focus was on understanding the role of water availability and other climate-related factors in explaining patterns of amphibian occupancy.',
      image: {
        src: '/img/powell.webp',
        caption: 'Powell Center Partner Sites',
      },
      start: new Date('2013-02-01'),
      end: new Date('2016-02-01'),
    },
    {
      name: 'Population dynamics of a high elevation pond breeding amphibian',
      purpose:
        'What factors influence the demography and persistence of high elevation pond breeding amphibians?',
      researchQuestions: [
        'What are basic demographic estimates in Boreal chorus frogs and how does climate impact this species across time?',
      ],
      summary:
        'In collaboration with the [USGS Fort Collins Science Center](https://www.fort.usgs.gov/staff-details/123), we hoped to better understand the dynamics of high elevation amphibians. Using long time series of capture-mark-recapture data in high elevation populations of Boreal chorus frogs (Pseudacris maculata), we increased our basic ecological and demographic knowledge of this species. In addition, this pond-breeding amphibian is a useful system in which to understand the importance of climate, hydroperiod, and the impacts of climate change on high elevation, montane amphibian species. We approached this through continued data collection of marked populations, analysis of current monitoring data, and data reclamation efforts from studies conducted in the 1960s and 1970s.',
      image: {
        src: '/img/chorus-frogs.webp',
        caption:
          'Boreal chorus frogs (Pseudacris maculata) waiting to be marked. Photo credit S. Amburgey',
      },
      start: new Date('2011-02-01'),
      end: new Date('2013-02-01'),
    },
  ],
  publications: [
    {
      title:
        'Tools for increasing visual encounter probabilities for invasive species removal: a case study of brown treesnakes',
      authors:
        'S. Amburgey, A.A. Yackel Adams, B. Gardner, B. Lardner, A.J. Knox, S.J. Converse',
      journal: 'Neobiota',
      published: new Date('2021-12-14'),
      link: 'https://doi.org/10.3897/neobiota.70.71379',
    },
    {
      title:
        'Evaluation of camera trap-based abundance estimators for unmarked populations',
      authors:
        'S. Amburgey, A.A. Yackel Adams, B. Gardner, N.J. Hostetter, S.R. Siers, B.T. McClintock, S.J. Converse',
      journal: 'Ecological Applications',
      published: new Date('2021-07-13'),
      link: 'https://doi.org/10.1002/eap.2410',
    },
    {
      title:
        'The influence of species life history and distribution characteristics on species responses to habitat fragmentation in an urban landscape',
      authors:
        'S. Amburgey, D.A.W. Miller, C.J. Rochester, K. Delaney, S. Riley, C.S. Brehme, S.A. Hathaway, R.N. Fisher',
      journal: 'Journal of Animal Ecology',
      published: new Date('2020-12-10'),
      link: 'https://doi.org/10.1111/1365-2656.13403',
    },
    {
      title:
        'Factors Facilitating Co-occurrence at the Range Boundary of Shenandoah and Red-Backed Salamanders',
      authors:
        'S. Amburgey, D.A.W. Miller, A. Brand, A. Dietrich, E.H. Campbell Grant',
      journal: 'Journal of Herpetology',
      published: new Date('2020-02-14'),
      link: 'https://doi.org/10.1670/18-162',
    },
    {
      title:
        'Knowing your limits: estimating range boundaries and co-occurrence zones for two competing plethodontid salamanders',
      authors:
        'S. Amburgey, D.A.W. Miller, A. Brand, A. Dietrich, E.H. Campbell Grant',
      journal: 'Ecosphere',
      published: new Date('2019-05-19'),
      link: 'https://doi.org/10.1002/ecs2.2727',
    },
    {
      title:
        'Quantifying climate sensitivity and climate-driven change in North American amphibian communities',
      authors:
        'D.A.W. Miller, E.H.C. Grant, E. Muths, S.M. Amburgey, M.J. Adams, M.B. Joseph, J.H. Waddle, P.T.J. Johnson, M.E. Ryan, B.R. Schmidt, D.L. Calhoun, C.L. Davis, R.N. Fisher, D.M. Green, B.R. Hossack, T.A.G. Rittenhouse, S.C. Walls, L.L. Bailey, S.S. Cruickshank, G.M. Fellers, T.A. Gorman, C.A. Haas, W. Hughson, D.S. Pilliod, S.J. Price, A.M. Ray, W. Sadinski, D. Saenz, W.J. Barichivich, A. Brand, C.S. Brehme, R. Dagit, K.S. Delaney, B.M. Glorioso, L.B. Kats, P.M. Kleeman, C.A. Pearl, C.J. Rochester, S.P.D. Riley, M. Roth, B.H. Sigafus',
      journal: 'Nature Communications',
      published: new Date('2018-09-25'),
      link: 'https://doi.org/10.1038/s41467-018-06157-6',
    },
    {
      title:
        'Twenty-nine years of population dynamics in a small-bodied montane amphibian',
      authors: 'E. Muths, R. Scherer, S. M. Amburgey, and P. S. Corn',
      journal: 'Ecosphere',
      published: new Date('2018-12-04'),
      link: 'https://doi.org/10.1002/ecs2.2522',
    },
    {
      title:
        'Range position and climate sensitivity: The structure of among-population demographic responses to climatic variation',
      authors:
        'S. Amburgey, D.A.W. Miller, E.H.C. Grant, T.A.G. Rittenhouse, M.F. Benard, J.L. Richardson, M.C. Urban, W. Hughson, A.B. Brand, C.J. Davis, C.R. Hardin, P.W.C. Paton, C.J. Raithel, R.A. Relyea, A. Floyd Scott, D.K. Skelly, D.E. Skidds, C.K. Smith, and E.E. Werner',
      journal: 'Global Change Biology',
      published: new Date('2017-07-19'),
      link: 'https://doi.org/10.1111/gcb.13817',
      press: [
        {
          name: 'The Wildlife Society',
          link: 'http://wildlife.org/climate-change-brings-varying-risks-to-wood-frogs/',
        },
        {
          name: 'Penn State News',
          link: 'http://news.psu.edu/story/478301/2017/08/19/research/wood-frogs-research-clarifies-risks-posed-animals-warming-climate',
        },
      ],
    },
    {
      title:
        'First Estimates of the Probability of Survival in a Small-bodied, High Elevation Frog or, how Historical Data Can Be Useful',
      authors:
        'E. Muths, R.D. Scherer, S.M. Amburgey, T. Matthews, A.W. Spencer, P.S. Corn',
      journal: 'Canadian Journal of Zoology',
      published: new Date('2016-06-17'),
      link: 'https://doi.org/10.1139/cjz-2016-0024',
    },
    {
      title:
        'Quantitative evidence for the effects of multiple drivers on continental-scale amphibian declines',
      authors:
        'E.H.C. Grant, D.A.W. Miller, B.R. Schmidt, M.J. Adams, S. Amburgey, T. Chambert, S.S. Cruickshank, R.N. Fisher, D.M. Green, B.R. Hossack, P.T.J. Johnson, M.B. Joseph, T. Rittenhouse, M. Ryan, J.H. Waddle, S.C. Walls, L.L. Bailey, G.M. Fellers, T.A. Gorman, A.M. Ray, D.S. Pilliod, S.J. Price, D. Saenz, W. Sadinski, and E. Muths',
      journal: 'Scientific Reports',
      published: new Date('2016-05-23'),
      link: 'https://doi.org/10.1038/srep25625',
      press: [
        {
          name: 'Popular Science',
          link: 'https://www.facebook.com/PopSci/videos/10154202075401411/',
        },
        {
          name: 'Science Daily',
          link: 'https://www.sciencedaily.com/releases/2016/05/160523125907.htm',
        },
      ],
    },
    {
      title:
        'Phenotypic plasticity in developmental rate is insufficient to offset high tadpole mortality in rapidly drying ponds',
      authors: 'S. Amburgey, M. Murphy, and W. C. Funk',
      journal: 'Ecosphere',
      published: new Date('2016-07-11'),
      link: 'https://doi.org/10.1002/ecs2.1386',
    },
    {
      title:
        'Elevational speciation in action? Restricted gene flow associated with adaptive divergence across an altitudinal gradient',
      authors:
        'W.C. Funk, M.A. Murphy, K.L. Hoke, E. Muths, S. Amburgey, E.M. Lemmon and A.R. Lemmon',
      journal: 'Journal of Evolutionary Biology',
      published: new Date('2015-09-12'),
      link: 'https://doi.org/10.1111/jeb.12760',
    },
    {
      title:
        'The effects of hydropattern and predator communities on amphibian occupancy',
      authors: 'S. Amburgey, L. L. Bailey, M. Murphy, E. Muths, W.C. Funk',
      journal: 'Canadian Journal of Zoology',
      published: new Date('2014-09-23'),
      link: 'https://doi.org/10.1139/cjz-2014-0106',
    },
    {
      title:
        'Demography of common toads after local extirpation of co-occurring midwife toads',
      authors:
        'J. Bosch, S. Fernández-Beaskoetxea, R.D. Scherer, S. Amburgey, and E. Muths',
      journal: 'Amphibia-Reptilia',
      published: new Date('2014-09-15'),
      link: 'https://doi.org/10.1163/15685381-00002952',
    },
    {
      title:
        'Effects of hydroperiod duration on survival, developmental rate, and size at metamorphosis in boreal chorus frog tadpoles (Pseudacris maculata)',
      authors: 'S. Amburgey, W.C. Funk, M. Murphy, and E. Muths',
      journal: 'Herpetologica',
      published: new Date('2012-12-01'),
      link: 'https://doi.org/10.1655/HERPETOLOGICA-D-11-00093',
    },
  ],
  outreach: [
    {
      event: '4H Extension',
      date: new Date('2018-04-21'),
      summary: '',
      image: {
        src: '/img/4h.webp',
        caption:
          '4H Extension - Lifecycle of a Salamander demonstration. Photo credit D. Muñoz',
      },
    },
    {
      event: 'Science Pub',
      date: new Date('2018-01-05'),
      summary: '',
      image: {
        src: '/img/science-pub.webp',
        caption:
          'Science Pub - The Newtiful Life of Salamanders presentation. Photo credit R. Newton',
      },
    },
    {
      event: 'Science Café',
      date: new Date('2016-01-26'),
      summary: '',
      image: {
        src: '/img/science-cafe.webp',
        caption: 'Science Café - The Science of Beer. Photo credit R. Newton',
      },
    },
    {
      event: 'Save the Frogs Day',
      date: new Date('2013-04-13'),
      summary: '',
      image: {
        src: '/img/safe-the-frogs.webp',
        caption:
          'Save the Frogs - Presentation to classroom about amphibian conservation.',
      },
    },
  ],
  links: [
    {
      name: 'Quantitative Conservation Lab - University of Washington',
      link: 'http://depts.washington.edu/qcons/',
      image: { src: '/img/uw.webp', caption: 'UW Huskies Logo' },
    },
    {
      name: 'Murrelet Innovation',
      link: 'https://www.murreletinnovation.com/',
      image: { src: '/img/murrelet.webp', caption: 'Murrelet Innovation Logo' },
    },
    {
      name: 'Applied Population Ecology Lab - Penn State University',
      link: 'https://www.appliedpopecol.org/',
      image: {
        src: '/img/psu.webp',
        caption: 'The Pennsylvania State University Logo',
      },
    },
    {
      name: 'Funk Lab Group - Colorado State University',
      link: 'https://funklab.colostate.edu/people/',
      image: {
        src: '/img/csu-natsci.webp',
        caption: 'Colorado State College of Natural Sciences Logo',
      },
    },
    {
      name: 'Estación científica Yasuní',
      link: 'https://www.puce.edu.ec/estacion-cientifica-yasuni/',
      image: {
        src: '/img/yasuni.png',
        caption: 'Estación científica Yasuní Logo',
      },
    },
  ],
}

export default resume
