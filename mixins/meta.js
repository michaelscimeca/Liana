export default {
  head () {
    const url = `${this.$route.path}`;
    const meta = [
      { property: 'og:url', content: url }
    ];

    if (this.seo_title) {
      meta.push({ hid: 'ogTitle', property: 'og:title', content: this.seo_title });
      meta.push({ hid: 'twitterTitle', property: 'twitter:title', content: this.seo_title });
    }

    if (this.seo_description) {
      meta.push({ hid: 'description', name: 'description', content: this.seo_description });
      meta.push({ hid: 'ogDescription', property: 'og:description', content: this.seo_description });
      meta.push({ hid: 'twitterDescription', property: 'twitter:description', content: this.seo_description });
    }

    if (this.seo_og_image) {
      meta.push({ hid: 'ogImage', property: 'og:image', content: this.seo_og_image });
      meta.push({ hid: 'ogSecureImage', property: 'og:image:secure_url', content: this.seo_og_image });
      meta.push({ hid: 'twitterImage', property: 'twitter:image', content: this.seo_og_image });
    }

    return {
      title: this.seo_title,
      meta,
      link: [
        { rel: 'canonical', href: url }
      ]
    };
  }
};
