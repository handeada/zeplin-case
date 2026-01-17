import React from 'react';
import PostCard from './PostCard';

export default {
  title: 'Components/PostCard',
  component: PostCard,
};

const Template = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'İklim',
  categoryVariant: 'primary',
  articleType: 'Araştırma Makalesi',
  title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
  pageRange: '12-28',
  authors: ['Elif Başkaya Acar', 'Emre Taran', 'Halil Başar'],
  onPrint: () => console.log('Print clicked'),
  onDownload: () => console.log('Download clicked'),
  onView: () => console.log('View clicked'),
};

export const WithoutAuthors = Template.bind({});
WithoutAuthors.args = {
  category: 'Teknoloji',
  categoryVariant: 'secondary',
  articleType: 'Makale',
  title: 'Yapay Zeka ve Geleceğin Dünyası',
  pageRange: '5-15',
  onPrint: () => console.log('Print clicked'),
  onDownload: () => console.log('Download clicked'),
  onView: () => console.log('View clicked'),
};

export const DifferentCategory = Template.bind({});
DifferentCategory.args = {
  category: 'Sağlık',
  categoryVariant: 'teal',
  articleType: 'Araştırma',
  title: 'COVID-19 Pandemisinin Toplum Sağlığına Etkileri',
  pageRange: '1-50',
  authors: ['Dr. Ahmet Yılmaz', 'Prof. Dr. Ayşe Demir'],
  onPrint: () => console.log('Print clicked'),
  onDownload: () => console.log('Download clicked'),
  onView: () => console.log('View clicked'),
};

export const MultipleCards = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <PostCard
      category="İklim"
      categoryVariant="primary"
      articleType="Araştırma Makalesi"
      title="Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi"
      pageRange="12-28"
      authors={['Elif Başkaya Acar', 'Emre Taran', 'Halil Başar']}
      onPrint={() => console.log('Print clicked')}
      onDownload={() => console.log('Download clicked')}
      onView={() => console.log('View clicked')}
    />
    <PostCard
      category="Eğitim"
      categoryVariant="secondary"
      articleType="Makale"
      title="Dijital Çağda Eğitim Sistemlerinin Dönüşümü"
      pageRange="30-45"
      authors={['Mehmet Özkan', 'Zeynep Kaya']}
      onPrint={() => console.log('Print clicked')}
      onDownload={() => console.log('Download clicked')}
      onView={() => console.log('View clicked')}
    />
    <PostCard
      category="Ekonomi"
      categoryVariant="warning"
      articleType="Rapor"
      title="2025 Yılı Ekonomik Göstergeler ve Analizler"
      pageRange="1-100"
      authors={['Ali Yurt', 'Fatma Çelik', 'Can Arslan']}
      onPrint={() => console.log('Print clicked')}
      onDownload={() => console.log('Download clicked')}
      onView={() => console.log('View clicked')}
    />
  </div>
);
