<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Facades\Schema;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasColumn('tags', 'image_url')) {
            return;
        }

        $schema->table('tags', function (Blueprint $table) {
            $table->string('image_url', 255)->nullable()->after('color');
        });
    },
    'down' => function (Builder $schema) {
        if (! $schema->hasColumn('tags', 'image_url')) {
            return;
        }

        $schema->table('tags', function (Blueprint $table) {
            $table->dropColumn('image_url');
        });
    },
];
