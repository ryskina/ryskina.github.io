// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Maria_Ryskina_CV.pdf";
          },
        },{id: "news-i-defended-my-phd-dissertation",
          title: 'I defended my PhD dissertation! 🎓',
          description: "",
          section: "News",},{id: "news-genbench-is-live-check-out-our-overview-of-generalization-studies-in-nlp",
          title: 'GenBench is live! Check out our overview of generalization studies in NLP.',
          description: "",
          section: "News",},{id: "news-the-paper-describing-our-work-at-queer-in-ai-will-appear-at-facct-2023",
          title: 'The paper describing our work at Queer in AI will appear at FAccT...',
          description: "",
          section: "News",},{id: "news-queer-in-ai-a-case-study-in-community-led-participatory-ai-won-facct-best-paper-award",
          title: 'Queer In AI: A Case Study in Community-Led Participatory AI won 🏆 FAccT...',
          description: "",
          section: "News",},{id: "news-i-have-been-recognized-as-an-outstanding-reviewer-at-acl-2023",
          title: 'I have been recognized as an outstanding reviewer at ACL 2023.',
          description: "",
          section: "News",},{id: "news-the-genbench-taxonomy-and-review-article-is-now-out-in-nature-machine-intelligence",
          title: 'The GenBench taxonomy and review article is now out in Nature Machine Intelligence....',
          description: "",
          section: "News",},{id: "news-the-elements-of-world-knowledge-ewok-framework-has-been-released",
          title: 'The Elements of World Knowledge (EWoK) framework has been released.',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-diversity-amp-amp-inclusion-chair-for-acl-2025",
          title: 'I am serving as a Diversity &amp;amp;amp; Inclusion Chair for ACL 2025.',
          description: "",
          section: "News",},{id: "news-excited-to-start-at-the-vector-institute-as-a-cifar-ai-safety-postdoc-fellow",
          title: 'Excited to start at the Vector Institute as a CIFAR AI Safety Postdoc...',
          description: "",
          section: "News",},{id: "news-i-ll-be-in-vancouver-for-icml-2025-find-me-at-the-queer-in-ai-social",
          title: 'I’ll be in Vancouver for ICML 2025. Find me at the Queer in...',
          description: "",
          section: "News",},{id: "news-a-paper-on-lm-brain-alignment-in-conceptual-processing-accepted-to-colm-2025",
          title: 'A paper on LM–brain alignment in conceptual processing accepted to COLM 2025.',
          description: "",
          section: "News",},{id: "news-i-am-giving-an-invited-talk-at-the-national-research-council-of-canada-in-ottawa",
          title: 'I am giving an invited talk at the National Research Council of Canada...',
          description: "",
          section: "News",},{id: "news-i-m-presenting-my-lm-brain-work-at-colm-2025-in-montreal-sessions-spotlight-2-amp-amp-poster-2-as-well-as-co-organizing-the-queer-in-ai-social",
          title: 'I’m presenting my LM–brain work at COLM 2025 in Montreal (sessions Spotlight 2...',
          description: "",
          section: "News",},{id: "news-i-was-a-guest-on-the-women-in-ai-research-podcast-huge-thanks-to-the-hosts-jekaterina-and-malikeh-for-the-great-discussion-about-llms-brains-and-understanding-language",
          title: 'I was a guest on the Women in AI Research podcast! Huge thanks...',
          description: "",
          section: "News",},{id: "news-our-work-on-normative-justification-for-llm-debate-was-featured-in-the-caisi-research-program-at-cifar-s-year-in-review-report",
          title: 'Our work on normative justification for LLM debate was featured in the CAISI...',
          description: "",
          section: "News",},{id: "news-a-paper-on-word-emergence-in-published-writing-and-on-social-media-accepted-to-lchange-2026",
          title: 'A paper on word emergence in published writing and on social media accepted...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%69%61.%72%79%73%6B%69%6E%61@%76%65%63%74%6F%72%69%6E%73%74%69%74%75%74%65.%61%69", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ryskina", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maria-ryskina-5a2332a4", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-5936-1380", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=s9kWzyQAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Maria-Ryskina/1410648718", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://vectorinstitute.ai/team/maria-ryskina/", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/mryskina.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/maria_ryskina", "_blank");
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
