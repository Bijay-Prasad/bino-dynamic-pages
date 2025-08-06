// components/PageCreator.jsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export default function PageCreator() {
  const [slug, setSlug] = useState('');
  const [components, setComponents] = useState([{ type: '', props: {} }]);
  const [isCreating, setIsCreating] = useState(false);

  const addComponent = () => {
    setComponents([...components, { type: '', props: {} }]);
  };

  const removeComponent = (index) => {
    if (components.length > 1) {
      setComponents(components.filter((_, i) => i !== index));
    }
  };

  const updateComponentType = (index, type) => {
    const updated = [...components];
    updated[index].type = type;
    updated[index].props = getDefaultProps(type);
    setComponents(updated);
  };

  const updateComponentProp = (index, propName, value) => {
    const updated = [...components];
    updated[index].props[propName] = value;
    setComponents(updated);
  };

  const addStatItem = (componentIndex) => {
    const updated = [...components];
    if (!updated[componentIndex].props.stats) {
      updated[componentIndex].props.stats = [];
    }
    updated[componentIndex].props.stats.push({ value: '', label: '' });
    setComponents(updated);
  };

  const removeStatItem = (componentIndex, statIndex) => {
    const updated = [...components];
    updated[componentIndex].props.stats.splice(statIndex, 1);
    setComponents(updated);
  };

  const updateStatItem = (componentIndex, statIndex, field, value) => {
    const updated = [...components];
    updated[componentIndex].props.stats[statIndex][field] = value;
    setComponents(updated);
  };

  const getDefaultProps = (type) => {
    switch (type) {
      case 'TextSection':
        return { title: '', content: '', align: 'left' };
      case 'ImageBlock':
        return { src: '/placeholder.jpg', alt: '', width: 800, height: 400 };
      case 'Card':
        return { title: '', description: '', icon: '🌟' };
      case 'StatsBox':
        return { stats: [{ value: '', label: '' }] };
      case 'CTA':
        return { text: '', href: '#', variant: 'default' };
      default:
        return {};
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
          components: components.filter(c => c.type)
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      toast.success('Page created successfully!');
      window.open(`/${slug}`, '_blank');
      setSlug('');
      setComponents([{ type: '', props: {} }]);
    } catch (error) {
      toast.error(error.message || 'Failed to create page');
    } finally {
      setIsCreating(false);
    }
  };

  const renderComponentFields = (component, index) => {
    switch (component.type) {
      case 'TextSection':
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={component.props.title || ''}
                onChange={(e) => updateComponentProp(index, 'title', e.target.value)}
                placeholder="Section title"
              />
            </div>
            <div>
              <Label>Content</Label>
              <Input
                value={component.props.content || ''}
                onChange={(e) => updateComponentProp(index, 'content', e.target.value)}
                placeholder="Section content"
              />
            </div>
            <div>
              <Label>Alignment</Label>
              <Select
                value={component.props.align || 'left'}
                onValueChange={(value) => updateComponentProp(index, 'align', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select alignment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 'ImageBlock':
        return (
          <div className="space-y-4">
            <div>
              <Label>Image Source</Label>
              <Input
                value={component.props.src || ''}
                onChange={(e) => updateComponentProp(index, 'src', e.target.value)}
                placeholder="/image.jpg"
              />
            </div>
            <div>
              <Label>Alt Text</Label>
              <Input
                value={component.props.alt || ''}
                onChange={(e) => updateComponentProp(index, 'alt', e.target.value)}
                placeholder="Image description"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Width (px)</Label>
                <Input
                  type="number"
                  value={component.props.width || ''}
                  onChange={(e) => updateComponentProp(index, 'width', parseInt(e.target.value))}
                  placeholder="800"
                />
              </div>
              <div>
                <Label>Height (px)</Label>
                <Input
                  type="number"
                  value={component.props.height || ''}
                  onChange={(e) => updateComponentProp(index, 'height', parseInt(e.target.value))}
                  placeholder="400"
                />
              </div>
            </div>
          </div>
        );

      case 'Card':
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={component.props.title || ''}
                onChange={(e) => updateComponentProp(index, 'title', e.target.value)}
                placeholder="Card title"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                value={component.props.description || ''}
                onChange={(e) => updateComponentProp(index, 'description', e.target.value)}
                placeholder="Card description"
              />
            </div>
            <div>
              <Label>Icon</Label>
              <Input
                value={component.props.icon || ''}
                onChange={(e) => updateComponentProp(index, 'icon', e.target.value)}
                placeholder="🌟"
              />
            </div>
          </div>
        );

      case 'StatsBox':
        return (
          <div className="space-y-4">
            <Label>Statistics</Label>
            {component.props.stats?.map((stat, statIndex) => (
              <div key={statIndex} className="border p-3 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Stat #{statIndex + 1}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeStatItem(index, statIndex)}
                    disabled={component.props.stats.length <= 1}
                  >
                    Remove
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Value</Label>
                    <Input
                      value={stat.value || ''}
                      onChange={(e) => updateStatItem(index, statIndex, 'value', e.target.value)}
                      placeholder="100+"
                    />
                  </div>
                  <div>
                    <Label>Label</Label>
                    <Input
                      value={stat.label || ''}
                      onChange={(e) => updateStatItem(index, statIndex, 'label', e.target.value)}
                      placeholder="Users"
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => addStatItem(index)}
            >
              Add Stat Item
            </Button>
          </div>
        );

      case 'CTA':
        return (
          <div className="space-y-4">
            <div>
              <Label>Button Text</Label>
              <Input
                value={component.props.text || ''}
                onChange={(e) => updateComponentProp(index, 'text', e.target.value)}
                placeholder="Click me"
              />
            </div>
            <div>
              <Label>Link URL</Label>
              <Input
                value={component.props.href || ''}
                onChange={(e) => updateComponentProp(index, 'href', e.target.value)}
                placeholder="/about"
              />
            </div>
            <div>
              <Label>Variant</Label>
              <Select
                value={component.props.variant || 'default'}
                onValueChange={(value) => updateComponentProp(index, 'variant', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select variant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="destructive">Destructive</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-muted-foreground text-sm">
            Select a component type to configure
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 border rounded-lg bg-background">
      <h2 className="text-2xl font-bold">Create New Page</h2>

      <div>
        <Label>Page Slug (URL path)</Label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">/</span>
          <Input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="my-new-page"
            required
            pattern="[a-z0-9-]+"
            title="Only lowercase letters, numbers, and hyphens"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Components</Label>
        {components.map((component, index) => (
          <div key={index} className="border p-4 rounded-lg space-y-4 bg-muted/10">
            <div className="flex justify-between items-center">
              <Select
                value={component.type}
                onValueChange={(value) => updateComponentType(index, value)}
                required
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select component" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TextSection">Text Section</SelectItem>
                  <SelectItem value="ImageBlock">Image Block</SelectItem>
                  <SelectItem value="Card">Card</SelectItem>
                  <SelectItem value="StatsBox">Stats Box</SelectItem>
                  <SelectItem value="CTA">Call to Action</SelectItem>
                </SelectContent>
              </Select>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => removeComponent(index)}
                disabled={components.length <= 1}
              >
                Remove
              </Button>
            </div>

            {renderComponentFields(component, index)}
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addComponent}
          className="w-full"
        >
          Add Component
        </Button>
      </div>

      <Button
        type="submit"
        disabled={isCreating || !slug || components.some(c => !c.type)}
        className="w-full"
      >
        {isCreating ? 'Creating...' : 'Create Page'}
      </Button>
    </form>
  );
}