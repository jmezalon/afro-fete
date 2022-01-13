class Api::HashtagsController < ApplicationController

    def index
        render json: Hashtag.all, status: :ok
    end

    def create
        render json: Hashtag.create(hashtag_params), status: :created
    end

    def show 
        render json: Hashtag.find(params[:id]), status: :ok
    end

    private 

    def hashtag_params
        params.permit(:event_id, :tag)
    end
end
