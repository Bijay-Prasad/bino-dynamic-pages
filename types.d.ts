// types.d.ts
export interface ComponentDefinition {
  type: 'Card' | 'ImageBlock' | 'TextSection' | 'StatsBox' | 'CTA';
  props: Record<string, any>;
}

export interface PageDefinition {
  slug: string;
  components: ComponentDefinition[];
}