class Api::GalleriesController < ApplicationController
    before_action :current_user, only: :create

    def index
        render json: Gallery.all, status: :ok
    end

    def create
        render json: @current_user.galleries.create!(gallery_params), status: :created
    end

    def destroy 
        Gallery.find(params[:id]).destroy 
        head :no_content
    end

    private 

    def gallery_params
        params.permit(:img_url)
    end
end
