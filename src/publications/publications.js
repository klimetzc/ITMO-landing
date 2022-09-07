const publications = [
  {
    img: "../../images/publications/Peregreen.jpg",
    title:
      "Peregreen–modular database for efficient storage of historical time series in cloud environments",
    authors:
      "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay Butakov, Yury Kuznetsov, Michael May",
    article:
      "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but also the volume of the data stored and operational costs when deploying the storage in a production environment such as the cloud. In this paper, we propose a concept for storing and indexing numerical time series that allows creating compact data representations optimized for cloud storages and perform typical operations-uploading, extracting, sampling, statistical aggregations, and–at high speed. Our modular database that implements the proposed approach–Peregreen–can achieve a throughput of 3 million entries per second for uploading and 48 million entries per second for extraction in Amazon EC2 while having only Amazon S3 as backend storage for all the data.",
    link: "https://www.usenix.org/conference/atc20/presentation/visheratin",
  },
  {
    img: "../../images/publications/Intelligent.jpg",
    title:
      "Intelligent sightseeing in immensely manifold cities: Case of 2018 fifa world cup host cities",
    authors:
      "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
    article:
      "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, distances of place from others in route, and location's relevance to the city unique features. Obtained walking paths were compared to real itineraries prepared by experts for city visitors. Survey results demonstrate that respondents prefer automated routes over existing routes from touristic services. We also created touristic itineraries for 11 cities that host FIFA World Cup 2018. For each city, these routes take into account their specific features related to historical and cultural background.",
    link: "https://dl.acm.org/doi/abs/10.1145/3356994.3365503",
  },
  {
    img: "../../images/publications/User_Profiles.jpg",
    title:
      "User profiles matching for different social networks based on faces identification",
    authors: "Timur Sokhin, Nikolay Butakov, Denis Nasonov",
    article:
      "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessments or sociological researches, this is better to achieve using a combination of the data from different social media. In this paper, we propose a new approach for user profiles matching across social media based on publicly available users’ face photos and conduct an experimental study of its efficiency. Our approach is stable to changes in content and style for certain social media.",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-29859-3_47",
  },
  {
    img: "../../images/publications/Orienteering_Problem.jpg",
    title:
      "Orienteering problem with functional profits for multi-source dynamic path construction",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article:
      "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of a specific point depends on its characteristics, position in the route, and other points in the route. For solving OPFP, we developed an open-source framework for solving orienteering problems, which utilizes four core components of OP in its modular architecture. Fully-written in Go programming language our framework can be extended for solving different types of tasks with different algorithms; this was demonstrated by implementation of two popular algorithms for OP solving—Ant Colony Optimization and Recursive Greedy Algorithm. Computational efficiency of the framework was shown through solving four well-known OP types: classic Orienteering Problem (OP), Orienteering Problem with Compulsory Vertices (OPCV), Orienteering Problem with Time Windows (OPTW), and Time Dependent Orienteering Problem (TDOP) along with OPFP. Experiments were conducted on a large multi-source dataset for Saint Petersburg, Russia, containing data from Instagram, TripAdvisor, Foursquare and official touristic website. Our framework is able to construct touristic paths for different OP types within few seconds using dataset with thousands of points of interest.",
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0213777",
  },
  {
    img: "../../images/publications/Intellectual_Execution.jpg",
    title:
      "Intellectual Execution Scheme of Iterative Computational Models based on Symbiotic Interaction with Application for Urban Mobility Modelling.",
    authors: "Mikhail Melnik, Denis A Nasonov, Alexey Liniov",
    article:
      "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also becomes more complex. This leads more and more often to the need to use high-performance computational clusters, such as supercomputers. Created multi-agent simulation applications require not only significant resources but often perform time-consuming complex scenarios, which significantly affects the efficiency of the executed process. However, there are various mechanisms for optimizing application execution for different needs. Unfortunately, the specificity of multi-agent simulation does not allow the use of traditional and modern algorithms due to the iteratively variable workload and limitations of a system software installed on the supercomputers. In this paper, we propose a four-level scheme for organizing the symbiotic execution (co-design) of multi-agent applications on supercomputers, as well as an effective two-level algorithm for optimizing the flow of the execution of an urban mobility simulation application. The algorithm is based on evolutionary approach and machine learning techniques.",
    link: "https://www.scitepress.org/Papers/2019/83656/83656.pdf",
  },
  {
    img: "../../images/publications/Urban_events_prediction.jpg",
    title:
      "Urban events prediction via convolutional neural networks and Instagram data",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    article:
      "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models. This research field is extremely important for all sorts of applications, from natural disasters preparation and criminal activity prevention to urban management and development of smart cities. However, even the leading models have an important disadvantage: they are based on prior knowledge about events being expected. So forecasting systems based on such models are heavily limited by a list of events that can be predicted and all events of other types will be out of systems’ scope. In this work, we try to address this issue and propose a deep learning model, which is able to predict an area of the future event in the ",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050919311123",
  },
];
