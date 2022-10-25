
export type Diasp = {
    name: string
    title?: string
    profession?: string
    rcountry: string
    afcountry: string
    flag: string
    undergrad?: {
        institution: string
        field: string
        degree: string
    }

    grad?: {
        institution?: string
        field: string
        degree: string
    }
    summary: string
    interest: string[]
    afdinsight: string
}

export const InitialDiasp = {
    name: 'Tosin Dada',
    title: 'Dr.',
    profession: 'Analytical Chemist',
    rcountry: 'United States',
    afcountry: 'Nigeria',
    flag: "/media/flags/nigeria.svg",
    undergrad: {
        institution: 'Olabisi Onabanjo University, Ogun State, Nigeria',
        field: 'Industrial Chemistry',
        degree: 'B.Sc'
    },

    grad: {
        institution: 'Utah States University, Logan UT, United States',
        field: 'Analytical Chemistry',
        degree: 'Ph.D.'
    },
    summary: `Dr Tosin Dada is a scientist and entrepreneur with extensive and diverse experience in research, 
    life science, product development, business strategy and operating plan development and execution.
     His professional journey in the last 15 years has taken multiple turns from academic research to industry and 
     entrepreneurial endeavors. This dynamic experience provides deep appreciation for the connection between research, 
     development, and product commercialization. His technical background cuts across analytical instrumentation, separation, 
     spectroscopy, mass spectrometry, proteomics, biopharmaceutical analytical developments, and data analysis. He has made modest 
     contributions to the scientific community as an author of several research publications, conference presentations, and a 
     reviewer for several peer-reviewed journals. Following four years of academic research, he spent seven years in the 
     biopharmaceutical development environment serving in both technical and leadership roles for early and late-stage drug 
     development, characterization, method transfer to QC and CROs, regulatory risk assessment and control strategies, and 
     cross functional collaborations on process and workflow optimization. In these roles, he acquired good understanding of 
     regulatory frameworks (FDA, EMA, GMP, and ICH guidelines) for analytical development in drug development. Currently, he is 
     the founder and CEO of GMJ Technologies, Inc. developing novel life science tools for biopharmaceutical and biomedical applications. 
     Through GMJ Technologies, Inc., Dr Dada has received multiple Small Business Innovation Research Award from the National Science Foundation, 
     and contributed to the development of technologies for proteomics and biopharmaceutical protein analysis In addition to his scientific background, Dr Dada is an African development enthusiast. He is passionate about the 
African promising future and how African diasporas can contribute to developments on the continent through business 
collaboration with fellow citizens in Africa.  He is the co-founder of Diasprex, Inc., a group developing a dynamic platform 
for mobilizing African diaspora’s resources for African development.
`,
    interest: ['Business', 'Finance', 'Science', 'Entrepreneurship'],
    afdinsight: 'Improved diaspora engagement is key to African development...'
}