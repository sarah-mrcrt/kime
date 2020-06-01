<?php

use Illuminate\Database\Seeder;

class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $steps = [
            // Activity 2
            [
                'position' => 1,
                'name' => 'Les ingrédients',
                'title' => '',
                'text' => 'Tu auras besoin de 250g de farine, 250g de sucre, 4 oeufs, 75cl de lait, 100g de pruneaux et de l\'aide de tes parents pour la cuisson',
                'activity_id' => 2, 
            ],
            [
                'position' => 2,
                'name' => 'Les poudres',
                'title' => '',
                'text' => 'Mélanger dans un saladier : 250g de farine et 250g de sucre',
                'activity_id' => 2, 
            ],
            [
                'position' => 3,
                'name' => 'Les oeufs',
                'title' => '',
                'text' => 'Ajoute dans le saladier les 4 oeufs & mélange un peu',
                'activity_id' => 2, 
            ],
            [
                'position' => 4,
                'name' => 'Le lait',
                'title' => '',
                'text' => 'Prends tes 70cL de lait. Ajoute un peu de lait quand la pâte devient trop dur à mélanger. Continue jusqu\'à avoir fini ton lait',
                'activity_id' => 2, 
            ],
            [
                'position' => 5,
                'name' => 'Les pruneaux',
                'title' => '',
                'text' => 'Ajoute les 100g de pruneaux dans ton mélange',
                'activity_id' => 2, 
            ],
            [
                'position' => 6,
                'name' => 'La cuisson',
                'title' => '',
                'text' => 'Appelle un parent pour t\'aider. Il faut verser la pâte dans un moule à gâteau et le faire cuire 45min à 180°C',
                'activity_id' => 2, 
            ],
            [
                'position' => 7,
                'name' => 'La dégustation',
                'title' => '',
                'text' => 'La cuisson est parfaite lorsque le dessus du fard breton devient dorée. Tu peux le manger tiède ou froid, bon appétit !',
                'activity_id' => 2, 
            ],
            // Activity 21
            [
                'position' => 1,
                'name' => 'Son corps',
                'title' => '',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'activity_id' => 21, 
            ],
            [
                'position' => 2,
                'name' => 'Ses pattes',
                'title' => '',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'activity_id' => 21, 
            ],
            [
                'position' => 3,
                'name' => 'Ses oreilles et sa queue',
                'title' => '',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'activity_id' => 21, 
            ],
            [
                'position' => 4,
                'name' => 'Sa crinière',
                'title' => '',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'activity_id' => 21, 
            ],
            [
                'position' => 5,
                'name' => 'Sa bouche et ses sourcil',
                'title' => '',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'activity_id' => 21, 
            ],
            [
                'position' => 6,
                'name' => 'Résultat final',
                'title' => '',
                'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'activity_id' => 21, 
            ],
        ];

        for ($item=0; $item < count($steps); $item++){ 
            foreach ($steps as $step) {
                $step = new \App\Step();
                $step->position = $steps[$item]['position'];
                $step->name = $steps[$item]['name'];
                $step->title = $steps[$item]['title'];
                if($item<9){
                    $step->img = "step-0".($item + 1).".jpg";
                }else{
                    $step->img = "step-".($item + 1).".jpg";
                }
                $step->text = $steps[$item]['text'];
                $step->activity_id = $steps[$item]['activity_id'];
                $step->save();
                $item+=1;
            }
        }
    }
}
