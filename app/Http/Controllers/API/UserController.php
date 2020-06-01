<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use Carbon\Carbon;

class UserController extends Controller 
{

    public function login()
    { 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $tokenResult = $user->createToken('Kime'); 

            return response()->json([
                'success' => true,
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ], 200);

        } else { 
            return response()->json(['error'=>'Wrong credentials']); 
        } 
    }

    public function adminpassword(Request $request)
    {
        $user = Auth::user();
        $hashedPassword = $user->admin_password; 

        if(Hash::check($request->password, $hashedPassword)) {
            return response()->json([
                'success' => true
            ], 200);
        } 
    }

    public function register(Request $request)
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password',
            'admin_password' => 'required'
        ]);

        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);            
        }

        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']);
        $input['admin_password'] = bcrypt($input['admin_password']);

        $user = new User;
        $user->fill($input);
        $user->save();

        if(Auth::attempt( ['email' => request('email'), 'password' => request('password')] )) { 
            $user = Auth::user();
            $tokenResult = $user->createToken('Kime');
            $success['token'] =  $user->createToken('Kime')->accessToken; 
            $success['name'] =  $user->name;
        }

        return response()->json([
            'success' => true,
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ], 200);
    }

    public function details()
    { 
        if(Auth::check()) {
            $user = Auth::user();
            return response()->json(['success' => true, 'user' => $user]); 
        } else {
            return response()->json(['error' => "L'utilisateur n'est pas connecté"]);
        }
        
    }

    public function logout(Request $request) 
    {
        Auth::logout();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());

        return response()->json([
            'success' => true
        ], 200);
    }

    public function destroy(User $user)
    {
        $user->delete();

        if($user->id != Auth::id()){
            abort(404);
        }

        return response()->json([
            'success' => true
        ], 200);
    }
}