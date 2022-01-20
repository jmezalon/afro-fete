class Api::HashtagsController < ApplicationController
    before_action :find_tag, only: [:update, :show]
    skip_before_action :authorize, only: [:create, :index, :show, :update]

    def index
        render json: Hashtag.all, status: :ok
    end

    # def show_events
    #     render json: @hashtag.events, status: :ok
    # end

    def create 
        render json: Hashtag.create!(hashtag_params), status: :created
    end

    def show 
        render json: @hashtag, serializer: EventTagSerializer, status: :ok
    end

    def update 
        @hashtag.update(hashtag_params)
        render json: @hashtag, status: :accepted 
    end

    private 

    def hashtag_params
        params.permit(:tag)
    end

    def find_tag
       @hashtag = Hashtag.find(params[:id])
    end
end
