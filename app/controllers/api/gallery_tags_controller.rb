class Api::GalleryTagsController < ApplicationController

    def index
        render json: GalleryTag.all, status: :ok
    end

    def create
        render json: GalleryTag.create!(gallerytag_params), status: :created
    end

    def show
        render json: GalleryTag.find(params[:id]), status: :ok
    end

    def destroy 
        GalleryTag.find(params[:id]).destroy 
        head :no_content
    end

    private 

    def gallerytag_params
        params.permit(:gallery_id, :hashtag_id)
    end
end
