/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
   
  GetStarted:[
   {
      type: 'doc',
      id: 'overview',
      label: "Overview"
    },
	{
      type: 'doc',
      id: 'get-started',
      label: "Getting Started"
    },
  ],
  Guides:[
   {
      type: 'category',
      label: 'Concepts',
	  link: {
			type: 'generated-index',
			title: 'Concepts',
			description: 'Description of the main concepts implemented in Qodly.',
			slug: '/category/concepts',
			keywords: ['concepts'],
			image: '/img/docusaurus.png',
			},
      items: ['concepts/server-architecture','concepts/db',
		{ 	type: 'category',
			label: 'Qodly Language',
			link: {
				type: 'generated-index',
				title: 'Qodly Language',
				description: 'Main concepts of the Qodly Language.',
				slug: '/category/language',
				keywords: ['language'],
				image: '/img/docusaurus.png',
			},
			items: ['concepts/lang-quicktour',
				'concepts/lang-operators',
				'concepts/lang-variables',
				'concepts/lang-arrays',
				'concepts/lang-methods',
				'concepts/lang-parameters',
				],
		},
      ],
    },
  ],
  API:[
   {
      type: 'doc',
      id: 'deploy/get-started',
      label: "Getting Started"
    },
 {
      type: 'doc',
      id: 'deploy/on-premise',
      label: "On Premise"
    },
  ],
};

module.exports = sidebars;
