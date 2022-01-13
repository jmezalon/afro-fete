class Api::HashtagsController < ApplicationController
    before_action :find_tag, only: [:update, :show]
    skip_before_action :authorize, only: [:create, :index, :show, :update]

    def index
        render json: Hashtag.all, status: :ok
    end

    def create
        render json: Hashtag.create(hashtag_params), status: :created
    end

    def show 
        render json: @tag, status: :ok
    end

    def update 
        @tag.update(hashtag_params)
        render json: @tag, status: :accepted 
    end

    private 

    def hashtag_params
        params.permit(:event_id, :tag)
    end

    def find_tag
       @tag = Hashtag.find(params[:id])
    end
end
