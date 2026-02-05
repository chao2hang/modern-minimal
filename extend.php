<?php

namespace Nopj\ModernMinimal;

use Flarum\Extend;
use Flarum\Tags\Api\Serializer\TagSerializer;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\ApiSerializer(TagSerializer::class))
        ->attributes(Api\AddTagImageUrl::class),
];
