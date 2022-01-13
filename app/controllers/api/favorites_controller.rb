class Api::FavoritesController < ApplicationController
    before_action :current_user, only: :create

    def index
        render json: Favorite.all, status: :ok
    end

    def create
        render json: @current_user.favorites.create!(favorites_params), status: :created
    end

    def destroy 
        Favorite.find(params[:id]).destroy 
        head :no_content
    end

    private 

    def favorites_params
        params.permit(:event_id)
    end
end
