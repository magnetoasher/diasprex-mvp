
export type Diasp = {
    name: string
    title?: string
    profession?: string
    rcountry: string
    afcountry: string
    undergrad?: {
        institution: string
        degree: string
    }

    grad?: {
        institution: string
        degree: string
    }
    summary: string
    interest: string
    afdinsight: string
}

export const InitialDiasp = {
    name: 'Tosin Dada',
    title: 'Dr.',
    profession: 'Analytical Chemist',
    rcountry: 'United States',
    afcountry: 'Nigeria',
    undergrad: {
        institution: 'Olabisi Onabanjo University',
        degree: 'Industrial Chemistry'
    },

    grad: {
        institution: 'Utah States University',
        degree: 'Ph.D Analytical Chemistry'
    },
    summary: "Lorem Ipsum has been the industry's standard dummy text ever" +
      "since the 1500s, when an unknown printer took a galley of type"+
      "and scrambled it to make a type specimen book. It has survived"+
      "not only five centuries, but also the leap into electronic" +
    "typesetting, remaining essentially unchanged.",
    interest: 'Business, Finance, Science, Entrepreneurship',
    afdinsight: 'Improved diaspora engagement is key to African development'
}