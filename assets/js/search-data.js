// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/IN-SB-Lab/";
    },
  },{id: "dropdown-people", title:"people",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/people/";
          },
        },{id: "dropdown-research", title:"research",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/research/";
          },
        },{id: "dropdown-publications", title:"publications",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/publications/";
          },
        },{id: "dropdown-teaching", title:"teaching",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/teaching/";
          },
        },{id: "dropdown-software", title:"software",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/software/";
          },
        },{id: "dropdown-news", title:"news",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/news/";
          },
        },{id: "dropdown-contact", title:"contact",
           description: "",
           content: "", // 쉼표 꼭 확인!
          section: "Dropdown", // Dropdown 하나만 둡니다.
          handler: () => {
            window.location.href = "/IN-SB-Lab/contact/";
          },
        },{id: "post-the-csblab-website-is-officially-live",
        
          title: "The CSBLab website is officially live!",
        
        description: "",
        content: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/IN-SB-Lab/news/2026/TheCSBLabWebsiteIsOfficiallyLive/";
          
        },
      },{id: "post-open-positions",
        
          title: "Open Positions",
        
        description: "",
        content: "We are actively recruiting MS/PhD students with backgrounds in Biology, Physics, CS, Statistics, or Bioengineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/IN-SB-Lab/news/2026/OpenPositions/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin eros sit amet ante aliquet, sit amet vulputate lectus mattis. Aenean ullamcorper pretium nunc, sed egestas lorem elementum id. Nulla id mi id neque ultrices egestas ut in urna. Sed ac ultricies nunc. Nam convallis placerat urna id egestas. Nulla porta, est interdum vestibulum venenatis, lorem odio laoreet sapien, in pulvinar tellus eros a dolor. Vivamus sapien justo, ullamcorper a mi eget, scelerisque euismod nunc. In augue augue, ultrices a ornare non, tincidunt quis justo. Donec sit amet consectetur eros. Nullam neque leo, tincidunt id ipsum ac, volutpat lobortis mi. Phasellus consequat ultricies arcu, eu semper ligula ultrices eget. Ut in fringilla elit, ac tincidunt nisi.Nunc commodo elit nec turpis feugiat consectetur. Nullam in nisi egestas, fermentum ligula hendrerit, euismod enim. Nulla eu hendrerit eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et velit ante. Vestibulum pretium vitae quam et sagittis. Proin eu nunc vel velit accumsan eleifend. Nulla facilisis, diam tempus imperdiet ultrices, massa ipsum consequat orci, sed efficitur eros mi a felis. Cras lobortis turpis sem, sed lobortis nunc ullamcorper tristique. Nam vehicula rhoncus ante, in faucibus sapien scelerisque et. Donec semper libero et tincidunt mattis. In vestibulum, nulla pretium dictum commodo, risus nulla vestibulum felis, at tincidunt massa mi in odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Donec efficitur ultrices purus sit amet imperdiet. Nam consequat metus in erat sodales faucibus. Aliquam maximus fermentum nulla id finibus. Aliquam iaculis sed odio vel rutrum. Curabitur sed odio est. Praesent nec sollicitudin tortor. Praesent pharetra, turpis quis porttitor rhoncus, ante massa fringilla lacus, nec porttitor magna turpis vitae felis. Nullam tristique massa id odio imperdiet, nec sodales massa egestas. Proin nisi metus, euismod sed accumsan vitae, facilisis vel risus. Morbi suscipit auctor erat, nec viverra elit fringilla eu. Mauris congue, purus id tristique facilisis, felis nisi efficitur magna, eu consectetur augue sem vitae lacus. Aliquam erat volutpat. Cras at nibh ultricies, volutpat arcu vitae, dictum est. In ac dolor sagittis, egestas lectus et, semper nisl. Etiam consectetur purus vitae sapien porttitor auctor.Nulla sit amet venenatis odio. Suspendisse ac lacus quis augue mollis tempus vel in lorem. Donec augue turpis, eleifend nec nibh eu, elementum dictum metus. Proin ut est ligula. Etiam vehicula facilisis metus, sit amet consectetur risus ullamcorper porttitor. In congue nibh quis sollicitudin iaculis. Donec a mollis lorem, non mollis lacus. Nulla et leo ex. Aliquam erat volutpat. Nam sit amet tincidunt mauris. Vivamus vitae est sit amet nisi semper egestas. Donec in diam pharetra, commodo diam vitae, imperdiet ligula. Cras iaculis ac diam eget vehicula. Proin suscipit ante enim, quis vehicula mi porta bibendum. Aliquam a diam porttitor, sollicitudin justo vitae, tempor odio.Cras fermentum dignissim pretium. Donec quis turpis eu neque lacinia facilisis in sit amet nibh. Nulla non tortor ultricies, euismod est in, blandit nibh. Ut a neque metus. Sed convallis condimentum nibh quis finibus. Praesent aliquam sem iaculis eros maximus accumsan. Nulla venenatis mauris id aliquet maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at enim vitae ex porttitor vestibulum sed eget nibh. Suspendisse accumsan feugiat quam eget ultricies.",
          section: "Books",handler: () => {
              window.location.href = "/IN-SB-Lab/books/the_godfather/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images, even citations (Einstein &amp;amp; Taub, 1950).Say you wanted to write a bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images, even citations (Einstein &amp;amp; Taub, 1950).Say you wanted to write a bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          content: "Every project has a beautiful feature showcase page.It’s easy to include images in a flexible 3-column grid format.Make your photos 1/3, 2/3, or full width.To give your project a background in the portfolio page, just add the img tag to the front matter like so:---layout: pagetitle: projectdescription: a project with a background imageimg: /assets/img/12.jpg---                                                                                                                                                                                              Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.                                                                  This image can also have a caption. It&#39;s like magic.You can also put regular text between your rows of images.Say you wanted to write a little bit about your project before you posted the rest of the images.You describe how you toiled, sweated, bled for your project, and then… you reveal its glory in the next row of images.                                                                                                                                You can also have artistically styled 2/3 + 1/3 images, like these.The code is simple.Just wrap your images with &amp;lt;div class=&quot;col-sm&quot;&amp;gt; and place them inside &amp;lt;div class=&quot;row&quot;&amp;gt; (read more about the Bootstrap Grid system).To make images responsive, add img-fluid class to each; for rounded corners and shadows use rounded and z-depth-1 classes.Here’s the code for the last row of images above:&amp;lt;div class=&quot;row justify-content-sm-center&quot;&amp;gt;  &amp;lt;div class=&quot;col-sm-8 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/6.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;  &amp;lt;div class=&quot;col-sm-4 mt-3 mt-md-0&quot;&amp;gt;    {% include figure.liquid path=&quot;assets/img/11.jpg&quot; title=&quot;example image&quot; class=&quot;img-fluid rounded z-depth-1&quot; %}  &amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;",
          section: "Projects",handler: () => {
              window.location.href = "/IN-SB-Lab/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          content: "Course OverviewThis course provides a comprehensive introduction to data science principles and practices. Students will:  Learn the end-to-end data science workflow  Gain practical experience with data manipulation tools  Develop skills in data visualization and communication  Apply statistical methods to derive insights from dataPrerequisites  Basic programming knowledge (preferably in Python)  Introductory statistics  Comfort with basic algebraTextbooks  “Python for Data Analysis” by Wes McKinney  “Data Science from Scratch” by Joel GrusGrading  Assignments: 50%  Project: 40%  Participation: 10%",
          section: "Teachings",handler: () => {
              window.location.href = "/IN-SB-Lab/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          content: "Course OverviewThis introductory course on machine learning covers fundamental concepts and algorithms in the field. By the end of this course, students will be able to:  Understand key machine learning paradigms and concepts  Implement basic machine learning algorithms  Evaluate and compare model performance  Apply machine learning techniques to real-world problemsPrerequisites  Basic knowledge of linear algebra and calculus  Programming experience in Python  Probability and statistics fundamentalsTextbooks  Primary: “Machine Learning: A Probabilistic Perspective” by Kevin Murphy  Reference: “Pattern Recognition and Machine Learning” by Christopher BishopGrading  Assignments: 40%  Midterm Exam: 20%  Final Project: 30%  Participation: 10%",
          section: "Teachings",handler: () => {
              window.location.href = "/IN-SB-Lab/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/IN-SB-Lab/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/IN-SB-Lab/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
