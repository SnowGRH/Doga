<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bejegyzeseks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tevekenyseg_id')->references('tevekenyseg_id')->on('tevekenysegs');
            $table->integer('osztaly_id')->references('osztaly_id')->on('users');
            $table->integer("allapot");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bejegyzeseks');
    }
};
