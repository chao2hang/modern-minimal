<?php

namespace Nopj\ModernMinimal\Api;

use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;

class AddTagImageUrl
{
    public function __invoke(TagSerializer $serializer, Tag $tag, array $attributes): array
    {
        $attributes['imageUrl'] = $tag->image_url;

        return $attributes;
    }
}
