<?php

use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activities = [
            [//1
                'name' => 'Macarons',
                'txt_choice' => 'Macarons', 
                'txt_win' => 'Tu as fait de belles langues de chat !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [//2
                'name' => 'Fard breton',
                'txt_choice' => 'Fard breton', 
                'txt_win' => 'Quel beau far, tu as fait !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [//3
                'name' => 'Baguette classique',
                'txt_choice' => 'Baguette classique', 
                'txt_win' => 'Quelle jolie baguette !', 
                'sub_category_id' => 4, 
                'trophy_id' => 4
            ],
            [ //4
                'name' => 'Cookies',
                'txt_choice' => 'Cookies', 
                'txt_win' => 'Rien de mieux que tes cookies pour le goûter !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [ //5
                'name' => 'Crêpes',
                'txt_choice' => 'Crêpes', 
                'txt_win' => 'Toutes ses crêpes ont l\'air délicieuses !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [ //6
                'name' => 'Glaçage à cupcake',
                'txt_choice' => 'Glaçage à cupcake', 
                'txt_win' => 'Ton glaçage est superbe !', 
                'sub_category_id' => 6, 
                'trophy_id' => 6
            ],
            [ //7
                'name' => 'Glaçage royal',
                'txt_choice' => 'Glaçage royal', 
                'txt_win' => 'Ton glaçage grille de mille feu !', 
                'sub_category_id' => 6, 
                'trophy_id' => 6
            ],
            [ //8
                'name' => 'Glace à l\'eau',
                'txt_choice' => 'à l\'eau', 
                'txt_win' => 'Ta glace à l\'eau à l\'air bonne !', 
                'sub_category_id' => 5, 
                'trophy_id' => 5
            ],
            [ //9
                'name' => 'Glace à la fraise',
                'txt_choice' => 'à la fraise', 
                'txt_win' => 'Ta glace à la fraise donne envie !', 
                'sub_category_id' => 5, 
                'trophy_id' => 5
            ],
            [ //10
                'name' => 'Muffins',
                'txt_choice' => 'Muffins', 
                'txt_win' => 'Quels beaux muffins !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [ //11
                'name' => 'Pain perdu',
                'txt_choice' => 'Pain perdu', 
                'txt_win' => 'Ce pain perdu à l\'air délicieux !', 
                'sub_category_id' => 4, 
                'trophy_id' => 4
            ],
            [ //12
                'name' => 'Pain sans pétrissage',
                'txt_choice' => 'Pain sans pétrissage', 
                'txt_win' => 'Quel joli pain !', 
                'sub_category_id' => 4, 
                'trophy_id' => 4
            ],
            [ //13
                'name' => 'Biscuits sablés',
                'txt_choice' => 'Biscuits sablés', 
                'txt_win' => 'Tous tes biscuits donnent envie d\'en manger !', 
                'sub_category_id' => 1, 
                'trophy_id' => 1
            ],
            [ //14
                'name' => 'Hotel à insecte',
                'txt_choice' => 'Hotel à insecte', 
                'txt_win' => 'Ton hotel est somptueux !', 
                'sub_category_id' => 7, 
                'trophy_id' => 7
            ],
            [ //15
                'name' => 'Dico des insectes',
                'txt_choice' => 'Dico des insectes', 
                'txt_win' => 'Tu as découvert des supers insectes !', 
                'sub_category_id' => 7, 
                'trophy_id' => 7
            ],
            [ //16
                'name' => 'Bulles de savons',
                'txt_choice' => 'Bulles de savons', 
                'txt_win' => 'Tu as fait de belles bulles !', 
                'sub_category_id' => 8, 
                'trophy_id' => 8
            ],
            [ //17
                'name' => 'Faire pousser un noyau d\'avocat',
                'txt_choice' => 'Un noyau d\'avocat', 
                'txt_win' => 'Ton noyau d\'avocat grandira un peu plus chaque jour !', 
                'sub_category_id' => 9, 
                'trophy_id' => 9
            ],
            [ //18
                'name' => 'Faire pousser un chapeau d\'ananas',
                'txt_choice' => 'Un chapeau d\'ananas', 
                'txt_win' => 'Attend un peu, et la plante sortira !', 
                'sub_category_id' => 9, 
                'trophy_id' => 9
            ],
            [ //19
                'name' => 'Solitaire',
                'txt_choice' => 'Solitaire', 
                'txt_win' => 'Qui a dit qu\'on ne pouvait pas s\'amuser tout seul?', 
                'sub_category_id' => 10, 
                'trophy_id' => 10
            ],
            [ //20
                'name' => 'Chamboule-tout',
                'txt_choice' => 'Chamboule-tout', 
                'txt_win' => 'Y a plus qu\'à jouer !', 
                'sub_category_id' => 11, 
                'trophy_id' => 11
            ],
            [ //21
                'name' => 'Dessin de lion',
                'txt_choice' => 'Dessin de lion', 
                'txt_win' => 'Comment dessiner un lion ?', 
                'sub_category_id' => 3, 
                'trophy_id' => 3
            ],
            [ //22
                'name' => 'Dessin de chat',
                'txt_choice' => 'Dessin de chat', 
                'txt_win' => 'Comment dessiner un chat ?', 
                'sub_category_id' => 3, 
                'trophy_id' => 3
            ],
            [ //23
                'name' => 'Dessin de cheval',
                'txt_choice' => 'Dessin de cheval', 
                'txt_win' => 'Comment dessiner un cheval ?', 
                'sub_category_id' => 3, 
                'trophy_id' => 3
            ],
            [ //24
                'name' => 'Dessin de protection',
                'txt_choice' => 'Dessin de protection', 
                'txt_win' => 'Protégeons-nous face au covid-19 !', 
                'sub_category_id' => 3, 
                'trophy_id' => 3
            ],
        ];

        for ($item=0; $item < count($activities); $item++){ 
            foreach ($activities as $activity) {
                $activity = new \App\Activity();
                $activity->name = $activities[$item]['name'];
                if($item<9){
                    $activity->img = "activity-0".($item + 1).".png";
                }else{
                    $activity->img = "activity-".($item + 1).".png";
                }
                $activity->txt_choice = $activities[$item]['txt_choice'];
                $activity->txt_win = $activities[$item]['txt_win'];
                $activity->sub_category_id = $activities[$item]['sub_category_id'];
                $activity->trophy_id = $activities[$item]['trophy_id'];
                $activity->save();
                $item+=1;
            }
        }
    }
}
