class Api::FavoritesController < ApplicationController
    before_action :current_user, only: [:destroy, :create, :index]
    skip_before_action :authorize, only: [:index] 

    def index
        render json: @current_user.favorites, status: :ok
    end

    def create
        render json: @current_user.favorites.create!(fav_params), status: :created
    end

    def destroy 
        Favorite.find(params[:id]).destroy 
        head :no_content
    end

    private 

    def fav_params
        params.permit(:event_id)
    end

end
